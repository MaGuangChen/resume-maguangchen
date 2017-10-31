import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';

import Slider from './SalarySlider';
import Calendar from './Calendar';

const StepTwo = (props) => {
    const { year, month, date, hour, minute, dispatch,
        showCalendar, submitSelectedTime, timeSelectStatus } = props;

    const handleCompanyName = (e) => {
        const name = e.target.value;
        dispatch(actions.handleCompanyName(name));
    }
    const handleCompanyPosition = (e) => {
        const position = e.target.value;
        dispatch(actions.handleCompanyPosition(position));
    }

    const cnWeekDay = ['日', '一', '二', '三', '四', '五', '六'];    
    const selectedInterviewTime = submitSelectedTime 
        ? `${year}年${month}月${date.date()}日 
        星期${cnWeekDay[date.day()]} ${hour} 點 ${minute} 分`
        : '點擊以選擇時間';

    const handleShowCalendar = () => {
        const status = !showCalendar;
        dispatch(actions.handleCalendar(status));
    }

    return (
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
            <div onClick={props.addCompany} className="contact_input_submit">
                確認提交<i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </div>
    </div>   
    );
}

export default connect()(StepTwo);