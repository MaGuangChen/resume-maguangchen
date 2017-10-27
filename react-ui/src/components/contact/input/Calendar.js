import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { extendMoment } from 'moment-range';

import CalendarMonthAndYear from '../CalendarComponent/CalendarMonthAndYear';
import CalendarWeekHeader from '../CalendarComponent/CalendarWeekHeader';
import CalendarDates from '../CalendarComponent/CalendarDates';
import TimePeriod from '../CalendarComponent/TimePeriod';

const Calendar = (props) => {
  const { year, month, date, timeSelectStatus, showCalendar } = props;
  const momentRange = extendMoment(moment);
  const weekEveryMonth = () => {
    const firstWeek = momentRange(`${year}-${month}`).startOf('month').week();
    const lastWeek = momentRange(`${year}-${month}`).endOf('month').week();
    const decemberLastWeek = moment(`${year}-12-31`).week();
    const thisYearLastWeek = moment(`${year}-12-31`).subtract(7, 'days').week();
    const weeksOfMonth = lastWeek - firstWeek + 1;
    const decemberWeekRange = (thisYearLastWeek - firstWeek) + 2;
    if(month === 12 && decemberLastWeek === 1){
      return decemberWeekRange;
    } else {
      return weeksOfMonth;
    }
  }

  const weeks = weekEveryMonth();
  const days = [];
  for(let i = 0; i < weeks; i++) {
    const startDate = moment(`${year}-${month}`).startOf('month').startOf('week').add(i === 0 ? 0 : 7 * i, 'days');
    const endDate = moment(`${year}-${month}`).startOf('month').startOf('week').add(6 + (7 * i), 'days');
    const range = moment.range(startDate, endDate);
    const dates = Array.from(range.by('day'));
    days.push(<CalendarDates 
                key={i} 
                id={`${year}-${month}`}
                month={month}
                date={date}
                weekDates={dates}/>);
  }

  return (
      <div className="calendar">
          <CalendarMonthAndYear 
              month={month}
              year={year}
          />
          <CalendarWeekHeader />
          {days}
          { timeSelectStatus && 
            <TimePeriod 
              year={year}
              month={month}
              date={date}
              showCalendar={showCalendar}
            /> 
          }
      </div>
  );
}

export default connect()(Calendar);