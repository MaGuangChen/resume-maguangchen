import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';
// import moment from 'moment';

import fetchUsers from '../../queries/fetchUsers';
import signUpMutation from '../../mutations/singup';
import addCompanyMutation from '../../mutations/addCompany';

import Slider from './SalarySlider';
import Calendar from './Calendar';
import * as actions from '../../actions/actions';

class ContactInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentId: null,
            currentAcount: null,
        }
    }
    componentWillReceiveProps(nextProps){
        const users = nextProps.data.users;
        const currentAcount = this.state.currentAcount;
        if(currentAcount){
            const currentUser = users.filter(u => u.acount === currentAcount);    
            this.setState({ currentId: currentUser[0].id });
        }
    }
    render(){
        const { currentId, currentAcount } = this.state;
        let completedSignup = false;
        if(currentId && currentAcount){
           completedSignup = true;
        }
        const { year, month, date, hour, minute,
            dispatch, showCalendar, submitSelectedTime,
            timeSelectStatus, userInfo, data, companyInfo } = this.props;

        const cnWeekDay = ['日', '一', '二', '三', '四', '五', '六'];    
        const selectedInterviewTime = submitSelectedTime 
            ? `${year}年${month}月${date.date()}日 
            星期${cnWeekDay[date.day()]} ${hour} 點 ${minute} 分`
            : '點擊以選擇時間';

        const handleShowCalendar = () => {
            const status = !showCalendar;
            dispatch(actions.handleCalendar(status));
        }
    
        const handleCompanyName = (e) => {
            const name = e.target.value;
            dispatch(actions.handleCompanyName(name));
        }
        const handleCompanyPosition = (e) => {
            const position = e.target.value;
            dispatch(actions.handleCompanyPosition(position));
        }
    
        const handleAcountInput = (e) => {
            const acount = e.target.value;
            dispatch(actions.createAcount(acount));
        }
        const handlePasswordInput = (e) => {
            const password = e.target.value;
            dispatch(actions.createPassword(password));
        }

        const handleCreateAcount = () => {
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

        const onSubmit = () => {
            const { name, position, salary } = companyInfo;
            const minSalary = salary[0];
            const maxSalary = salary[1];
            
            
            // const date = `{

            // }`;
        }
        
        
        // const h = parseInt(hour);
        // let m = 0;
        // if(minute === '30'){
        //     m = parseInt(minute);
        // }
        const dd = date.date();
        console.log(dd);
        // const d = moment({
        //     y:`${year}`,
        //     m: `${month}`,
        //     d: dd,
        //     h: h,
        //     minute: m,
        //     second: 0,
        //     millisecond :0
        // }).unix();
        // const dddd = moment(d).format('l');
        // console.log('this is current time');
        // console.log(d);
        // console.log(dddd);


        return (
            <div className="contact_input">

              { !completedSignup &&
              <div>
                <label>*您的聯絡信箱與觀看留言密碼</label>
                <div>
                    <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                    <input onChange={handleAcountInput} type="text" placeholder="輸入您的e-mail作為帳號" />
                </div>
                <div>
                    <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
                    <input onChange={handlePasswordInput} type="text" placeholder="創建密碼" />
                </div>

                <div onClick={handleCreateAcount} className="contact_input_submit contact_input_sign-up">
                  創辦帳號並繼續填寫<i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                </div>
                <div onClick={handleCreateAcount} className="contact_input_submit contact_input_login">
                  已經有帳號則可以直接login<i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                </div>
                下一步開始填寫您的公司資料與所需職位
              </div> }
            
            { completedSignup &&
             <div>
                <div>
                    <label>*您的公司名稱與所需職位</label>
                    <i className="fa fa-university fa-2x" aria-hidden="true"></i> 
                    <input onChange={handleCompanyName} type="text" placeholder="輸入您的公司名稱" />
                </div>
                <div>
                    <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                    <input onChange={handleCompanyPosition} type="text" placeholder="輸入您所需求之職位" />
                </div>
                <label>*您方便的面試時間與預計的薪水區間</label>
                <div className="contact_input_timeNsalary">
                    <i className="fa fa-calendar-check-o fa-2x" aria-hidden="true"></i>
                    <span className="contact_input_timeNsalary_time" 
                    onClick={handleShowCalendar}>{selectedInterviewTime}</span>
                    {showCalendar && 
                    <Calendar
                      year={year}
                      month={month}
                      date={date}
                      timeSelectStatus={timeSelectStatus}
                      showCalendar={showCalendar}                   
                    />}
                </div>
                <div className="contact_input_timeNsalary">
                    <Slider
                       minValue={40000}
                       maxValue={60000}
                       lowerValue={45000}
                       upperValue={48000}
                   />
                </div>
                <div onClick={onSubmit} className="contact_input_submit">
                  確認提交<i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                </div>
            </div> }  
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
