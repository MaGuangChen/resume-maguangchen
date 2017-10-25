import moment from 'moment';

export const changeAboutSectionReducer = (state = 'aboutMe', action) => {
    switch(action.type) {
      case 'CHANGE_ABOUT' :
        return action.section;
      default :
        return state;
    }
  }

  const defaultCalendar = {
    showCalendar: false,
    month: moment().month() + 1,
    year: moment().get('year'),
    date: moment(),
    hour: '10',
    minute: '00',
    timeSelectStatus: false,
    submitSelectedTime: false,
  }
  export const calendarChangeReducer = (state = defaultCalendar, action) => {
    switch(action.type) {
      case 'HANDLE_CALENDAR' :
        return {
          ...state,
          showCalendar: action.showCalendar
        }
      case 'MONTH_CHANGE' :
        return {
          ...state,
          month: action.month,
        };
      case 'YEAR_CHANGE' :
        return {
          ...state,
          year: action.year,
        }
      case 'CURRENT_SELECTED_DATE' :
        return {
          ...state,
          date: action.date,
        }
      case 'SELECTED_HOUR' :
        return {
          ...state,
          hour: action.hour,
        }
      case 'SELECTED_MINUTES' :
        return {
          ...state,
          minute: action.minute,
        }
      case 'HANDLE_TIME_SELECT' :
        return {
          ...state,
          timeSelectStatus: action.timeSelectStatus,
        }
      case 'HANDLE_SUBMIT_SELECTED_TIME' :
        return {
          ...state,
          submitSelectedTime: action.submitSelectedTime
        }
      default :
        return state;
    }
  }