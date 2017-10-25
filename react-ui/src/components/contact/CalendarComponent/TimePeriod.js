import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';

const TimePeriod = (props) => {
    const { month, date, dispatch } = props;
    const today = `${month}月
    ${date.date()}日`;

    const changeHour = (e) => {
      const hour = e.target.value;
      dispatch(actions.selectedHour(hour));
	}
	const changeMinutes = (e) => {
      const minute = e.target.value;
      dispatch(actions.selectedMinutes(minute));
	}
  const submitSelectTime = () => {
    dispatch(actions.handleCalendar(false));
    dispatch(actions.handleSubmitSelectedTime(true));
  }
    const hourArray = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];
    const minutes = ['00', '30'];
    const hourOption = hourArray.map(hour => <option className="time-period_select_option" key={hour} value={hour}>{ hour }</option>);
    const minutesOption = minutes.map(min => <option className="time-period_select_option" key={min}>{ min }</option>);
	
	return (
      <div className="time-period">
         { today }
         <div>您可以選擇10:00~18:30分之間的時間</div>
         <div>
           <select onChange={changeHour} className="time-period_select">{ hourOption }</select>
           <span className="time-deviend">:</span>
           <select onChange={changeMinutes} className="time-period_select">{ minutesOption }</select>
         </div>
         <div onClick={submitSelectTime} className="calendar_submit">確認所選日期與時段</div>
         <div className="calendar_des">已被選取時段: 09:00、10:00、12:00</div>   
      </div>
	);
}

export default connect()(TimePeriod);