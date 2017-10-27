import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import fetchUsers from '../../queries/fetchUsers';
import signUpMutation from '../../mutations/singup';
import addCompanyMutation from '../../mutations/addCompany';


import StepOne from './input/StepOne';
import StepTwo from './input/StepTwo';

class ContactInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentId: null,
            currentAcount: null,
            step: 1,
        }
        this.handleCreateAcount = this.handleCreateAcount.bind(this);
        this.onSumbit = this.onSumbit.bind(this);
        this.changeStep1 = this.changeStep1.bind(this);
        this.changeStep2 = this.changeStep2.bind(this);
    }
    componentWillReceiveProps(nextProps){
        const users = nextProps.data.users;
        const currentAcount = this.state.currentAcount;
        if(currentAcount){
            const currentUser = users.filter(u => u.acount === currentAcount);    
            this.setState({ currentId: currentUser[0].id });
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
                if(acount !== '' && acount){
                    checkAcountStatus = password !== '' 
                    ? password ? true : false
                    : false;
                }
            }
            if(checkAcountStatus){
                this.props.signupMutate({
                    variables: { acount, password },
                })
                .then(() => {
                    this.props.data.refetch()
                })
                this.setState({ currentAcount: acount });
            } else {
                console.log('acount is 被搶')
            }
        }
    }
    
    onSumbit() {
        const { year, month, date, hour, minute, companyInfo } = this.props;
        const { name, position, salary } = companyInfo;
        const minSalary = salary[0];
        const maxSalary = salary[1];
        const timeArray = [year, month, date.date(), hour, minute];
        const reservationDate = `${timeArray}`;
        const userId = this.state.currentId;
        if(name.length > 0 && position.length > 0) {
            this.props.addCompanyMutate({
                variables: { 
                    userId,
                    name, 
                    position, 
                    reservationDate,
                    minSalary,
                    maxSalary
                }
            }).then(() => console.log('finished'));
        }
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
                <StepOne handleCreateAcount={this.handleCreateAcount} /> }
                { this.state.step === 2 && <StepTwo
                year={year} month={month} date={date} hour={hour} minute={minute}
                showCalendar={showCalendar} submitSelectedTime={submitSelectedTime}
                timeSelectStatus={timeSelectStatus} onSumbit={this.onSumbit}
                /> }
            </div>
        )
    }
}

const componentWithGraphQL = compose(
    graphql(signUpMutation, { name: 'signupMutate' }),
    graphql(addCompanyMutation, { name: 'addCompanyMutate' }),
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
      login: state.login,
    }
  })(componentWithGraphQL);
