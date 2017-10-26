import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import fetchUsers from '../../queries/fetchUsers';
import signUpMutation from '../../mutations/singup';
import addCompanyMutation from '../../mutations/addCompany';

import Slider from './SalarySlider';
import Calendar from './Calendar';
import * as actions from '../../actions/actions';

class ContactInput extends Component {
    componentWillReceiveProps(nextProps) {
       if(nextProps.data){
            console.log('in recevice props');
            const { name, position, salary } = nextProps.companyInfo;
            const acount  = nextProps.userInfo.acount;
            const user = nextProps.data.users.filter(u => u.acount === acount);
            // console.log('company info :', nextProps.companyInfo);
            // console.log(acount);
            console.log(nextProps.data.users);
            console.log('user is : ', user);
            if(user.length > 0){
                const userId = user[0].id;
                const minSalary = salary[0];
                const maxSalary = salary[1];
                console.log(this.props);
                this.props.addCompanyMutate({
                    variables: { userId, name, position, minSalary, maxSalary },
                })
                .then(() => {
                    this.props.data.refetch()
                })
            }
        } 
    }

    render(){
        const { year, month, date, hour, minute,
            dispatch, showCalendar, submitSelectedTime,
            timeSelectStatus, userInfo, data } = this.props;
        
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
        
        const onSubmit = () => {
            const { acount, password } = userInfo;
            let check = false;
            if(data.users){
                const checkAcount = data.users.filter(u => u.acount === acount);
                if(checkAcount.length === 0){
                  console.log(checkAcount);
                  check = true;
                } 
            }
            if(check){
                console.log(check);
                this.props.signupMutate({
                    variables: { acount, password },
                })
                .then(() => {
                    this.props.data.refetch()
                })
            }else {
                console.log('acount is 被搶')
            }
        }
        return (
            <div className="contact_input">
                <div>
                    <label>*您的公司名稱與所需職位</label>
                    <i className="fa fa-university fa-2x" aria-hidden="true"></i> 
                    <input onChange={handleCompanyName} type="text" placeholder="輸入您的公司名稱" />
                </div>
                <div>
                    <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                    <input onChange={handleCompanyPosition} type="text" placeholder="輸入您所需求之職位" />
                </div>
                <label>*創建用於此網頁之帳號</label>
                <div>
                    <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                    <input onChange={handleAcountInput} type="text" placeholder="輸入您的e-mail作為帳號" />
                </div>
                <div>
                    <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
                    <input onChange={handlePasswordInput} type="text" placeholder="創建密碼" />
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
    }
  })(componentWithGraphQL);
