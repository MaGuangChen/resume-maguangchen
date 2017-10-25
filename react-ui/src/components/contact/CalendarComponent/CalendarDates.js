import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';

const CalendarDates = (props) => {
  const { month, date, weekDates, dispatch } = props;
  const dateList = weekDates.map((d, index) => {
      const selectDate = () => {
        dispatch(actions.currentSelectedDate(d));
        dispatch(actions.yearChange(d.get('year')));
        dispatch(actions.monthChange(d.month() + 1));
        dispatch(actions.handleTimeSelect(true));
      }

      const notThisMonthStyle = (d.month() + 1) !== month
      ? 'before-or-not-this-month' : '';
      const beforeToday = d.isBefore(moment()) ? 
      'before-or-not-this-month' : '';
      const selectedDateStyle = d.format('l') !== moment().format('l')
      ? (d.format('l') === date.format('l')
         ? 'selected-date' : '')
      : '';

      return (
        <div onClick={selectDate} key={`${props.id}-${d}`} className={`day_${index} ${notThisMonthStyle} ${selectedDateStyle} ${beforeToday}`}>
            <span >
              {d.date()}
            </span>
        </div>
      );
  });

	return (
      <div className="calendar_date-area">
        {dateList}
      </div>
	);
}

export default connect()(CalendarDates);
