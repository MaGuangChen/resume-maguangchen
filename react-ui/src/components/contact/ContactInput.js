import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import * as actions from '../../actions/actions';

import fetchUsers from '../../queries/fetchUsers';
import signUpMutation from '../../mutations/singup';
import addCompanyMutation from '../../mutations/addCompany';
import addUserMessageMutation from '../../mutations/addUserMessage';

import StepOne from './input/StepOne';
import StepTwo from './input/StepTwo';
import LightBox from '../base/LightBox';

class ContactInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentId: null,
            currentAcount: null,
            step: 1,
            showLightBox1: false,
            showLightBox2: false,
        }
        this.handleCreateAcount = this.handleCreateAcount.bind(this);
        this.addCompany = this.addCompany.bind(this);
        this.changeStep1 = this.changeStep1.bind(this);
        this.changeStep2 = this.changeStep2.bind(this);
        this.handleCloseLightBox1 = this.handleCloseLightBox1.bind(this);
        this.handleCloseLightBox2 = this.handleCloseLightBox2.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const users = nextProps.data.users;

        const currentAcount = this.state.currentAcount;
        if(currentAcount){
            if(users){
                const currentUser = users.filter(u => u.acount === currentAcount);    
                this.setState({ currentId: currentUser[0].id });
                localStorage.setItem('currentUserId', currentUser[0].id);
                localStorage.setItem('currentUserAcount', currentUser[0].acount);
            }
        }
    }

    changeStep1() {
       this.setState({ step: 1 })
    }
    changeStep2() {
       this.setState({ step: 2 })
    }

    handleCreateAcount() {
        const { userInfo, data } = this.props;
        const { acount, password } = userInfo;
        let checkAcountStatus = false;
        if(data.users){
            const checking = data.users.filter(u => u.acount === acount);
            if(checking.length === 0){
                const { acount, password } = this.props.userInfo;
                if(acount !== '' && acount.length > 9){
                    checkAcountStatus = password !== '' 
                    ? password  ? true : false
                    : false;
                } else {
                   this.setState({ showLightBox1: true });
                }
            } else if(checking.length > 0){
                this.setState({ showLightBox1: true });
            }
            if(checkAcountStatus){
                this.props.signupMutate({
                    variables: { acount, password },
                })
                .then(() => {
                    this.props.data.refetch()
                })
                this.setState({ currentAcount: acount, step: 2 });
            }
        }
    }
    
    addCompany() {
        const { year, month, date, hour, minute, companyInfo, dispatch } = this.props;
        const { name, position, salary } = companyInfo;
        const minSalary = salary[0];
        const maxSalary = salary[1];
        const minuteParse = minute === '00' ? 0 : minute;
        const timeArray = [year, month, date.date(), hour, minuteParse];
        const reservationDate = `[${timeArray}]`;
        const { currentAcount, currentId } = this.state;
        if(name.length > 0 && position.length > 0 
            && currentAcount !== null && currentId) {
            this.props.addCompanyMutate({
                variables: { 
                    acount: currentAcount,
                    name, 
                    position, 
                    reservationDate,
                    minSalary,
                    maxSalary
                }
            })
            this.props.addUserMessageMutate({
                variables: {
                    userAcount: currentAcount
                }
            })
            dispatch(actions.loginStatus(true));
        } else {
            this.setState({ showLightBox2: true });
        }
    }
    
    handleCloseLightBox1(){
        this.setState({ showLightBox1 : false });
    }
    handleCloseLightBox2(){
        this.setState({ showLightBox2 : false });
    }

    render(){
        const { year, month, date, hour, minute,
            showCalendar, submitSelectedTime,
            timeSelectStatus } = this.props;

        const step1Active = this.state.step === 1 ? 'contact_step_active' : '';
        const step2Active = this.state.step === 2 ? 'contact_step_active' : ''; 

        return (
            <div className="contact_input">
                <div className="contact_step">
                    <span onClick={this.changeStep1} className={step1Active}>Step 1 填寫聯絡信箱</span>
                    <span onClick={this.changeStep2} className={step2Active}>Step 2 填寫公司資料</span>
                </div>
                { this.state.step === 1 &&
                <div>
                    { this.state.showLightBox1 && <LightBox 
                        title="創建帳號失敗"
                        text="您好，創建帳號失敗的原因可能是您曾申請過帳號，或是您所輸入的帳號不是有效的e-mail信箱"
                        handleClose={this.handleCloseLightBox1}
                    /> } 
                    <StepOne handleCreateAcount={this.handleCreateAcount} /> 
                </div>
                }
                
                { this.state.step === 2 && 
                <div>
                    { this.state.showLightBox2 && <LightBox 
                        title="新增失敗"
                        text="您好，新增公司資訊失敗的原因可能是您未輸入欄位中的值，或是帳號正在創建中，如您確認欄位輸入值無誤，請你在兩秒後再次點擊確認送出"
                        handleClose={this.handleCloseLightBox2}
                    /> } 
                    <StepTwo
                    year={year} month={month} date={date} hour={hour} minute={minute}
                    showCalendar={showCalendar} 
                    submitSelectedTime={submitSelectedTime}
                    timeSelectStatus={timeSelectStatus} 
                    addCompany={this.addCompany} acount={this.state.acount}
                    />
                </div> }
            </div>
        )
    }
}

const componentWithGraphQL = compose(
    graphql(signUpMutation, { name: 'signupMutate' }),
    graphql(addCompanyMutation, { name: 'addCompanyMutate' }),
    graphql(addUserMessageMutation, { name: 'addUserMessageMutate'}),
    graphql(fetchUsers)
  )(ContactInput);


export default connect((state) => {
    return {
      year: state.calendar.year,
      month: state.calendar.month,
      date: state.calendar.date,
      hour: state.calendar.hour,
      minute: state.calendar.minute,
      timeSelectStatus: state.calendar.timeSelectStatus,
      showCalendar: state.calendar.showCalendar,
      submitSelectedTime: state.calendar.submitSelectedTime,
      userInfo: state.userInfo,
      companyInfo: state.companyInfo,
    }
  })(componentWithGraphQL);
