import moment from 'moment';

export const changeAboutSectionReducer = (state = 'aboutMe', action) => {
    switch(action.type) {
      case 'CHANGE_ABOUT' :
        return action.section;
      default :
        return state;
    }
}

const companyInfo = {
  name: '',
  position: '',
  salary: [45000, 48000],
}
export const handleCompanyInfoReducer = (state = companyInfo, action) => {
    switch(action.type) {
      case 'HANDLE_COMPANY_NAME' :
        return {
          ...state,
          name: action.name
        };
      case 'HANDLE_COMPANY_POSITION' :
        return {
          ...state,
          position: action.position
        };
      case 'HANDLE_SALARY_BUDGET' :
        return {
          ...state,
          salary: action.salary
        };
      default : 
        return state;
    }
}

const acountInfo = {
  acount: null,
  password: null
}

export const createAcountReducer = (state = acountInfo, action) => {
    switch(action.type) {
      case 'CREATE_ACOUNT' :
        return {
          ...state,
          acount: action.acount,
        };
      case 'CREATE_PASSWORD' :
        return {
          ...state,
          password: action.password
        }
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

const loginDefaultState = {
    login: false,
    showLogin: false,
    currentUser: null,
}

export const loginReducer = (state = loginDefaultState, action) => {
    switch(action.type) {
      case 'LOGIN_STATUS' :
       return {
         ...state,
         login: action.status
        };
      case 'SHOW_LOGIN' :
        return {
          ...state,
          showLogin: action.status
         };
      case 'SET_CURRENT_USER' :
         return {
           ...state,
           currentUser: action.id
          };
      default :
        return state;
    }
}