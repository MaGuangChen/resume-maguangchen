import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';

const CalendarMonthAndYear = (props) => {
	const { year, month, dispatch } = props;

	const addOneMonth = () => {
	  if(month === 12){
	  	dispatch(actions.yearChange(year + 1));
	  	dispatch(actions.monthChange(1));
      dispatch(actions.handleTimeSelect(false));
	  } else {
      dispatch(actions.monthChange(month + 1));
      dispatch(actions.handleTimeSelect(false));
	  }
	}
	const substractMonth = () => {
	  if(month === 1){
	    dispatch(actions.yearChange(year - 1));
	    dispatch(actions.monthChange(12));
      dispatch(actions.handleTimeSelect(false));
	  } else {
      dispatch(actions.monthChange(month - 1));
      dispatch(actions.handleTimeSelect(false));
	  }
	}

  const seasonCollection = {
    	firstSeason: [1, 2, 3], 
    	seconSeason: [4, 5, 6], 
    	thirdSeason: [7, 8, 9],
    	fourthSeason: [10, 11, 12]
  };

  const season = month <= 6
    ? (month < 4 ? seasonCollection.firstSeason
      : seasonCollection.seconSeason)
    : (month < 10 ? seasonCollection.thirdSeason
      : seasonCollection.fourthSeason);
  
      const selectMonthZero = () => {
        dispatch(actions.monthChange(season[0]));
        dispatch(actions.handleTimeSelect(false));
    };
    const selectMonthOne = () => {
        dispatch(actions.monthChange(season[1]));
        dispatch(actions.handleTimeSelect(false));
    };
    const selectMonthTwo = () => {
        dispatch(actions.monthChange(season[2]));
        dispatch(actions.handleTimeSelect(false));
    };

	return (
        <div className="calendar_header">
              <div className="calendar_header_year">{year}</div>
              <i onClick={substractMonth} className="fa fa-arrow-circle-left calendar_header_substract-month" aria-hidden="true"></i>
              <div className="calendar_header_month">
                <span 
                  className={`calendar_header_month_1 ${ season[0] === month ? 'active' : ''}`} 
                  onClick={selectMonthZero}>
                  { season[0] < 10 ? `0${season[0]}` : season[0] }
                </span>
                <span 
                  className={`calendar_header_month_2 ${ season[1] === month ? 'active' : ''}`} 
                  onClick={selectMonthOne}>
                  { season[1] < 10 ? `0${season[1]}` : season[1] }
                </span>
                <span 
                  className={`calendar_header_month_3 ${ season[2] === month ? 'active' : ''}`} 
                  onClick={selectMonthTwo}>
                  { season[2] < 10 ? `0${season[2]}` : season[2]  }
                </span>
              </div>
              <i onClick={addOneMonth} className="fa fa-arrow-circle-right calendar_header_add-month" aria-hidden="true"></i>
        </div>
	)
}

export default connect()(CalendarMonthAndYear);
