export const changeAbout = (section) => {
	return {
		type: 'CHANGE_ABOUT',
		section
	}
}

export const handleCalendar = (showCalendar) => {
	return {
		type: 'HANDLE_CALENDAR',
		showCalendar
	}
}

export const monthChange = (month) => {
	return {
		type: 'MONTH_CHANGE',
		month
	}
}

export const yearChange = (year) => {
	return {
		type: 'YEAR_CHANGE',
		year
	}
}

export const currentSelectedDate = (date) => {
	return {
		type: 'CURRENT_SELECTED_DATE',
		date
	}
}

export const selectedHour = (hour) => {
	return {
		type: 'SELECTED_HOUR',
		hour
	}
}

export const selectedMinutes = (minute) => {
	return {
		type: 'SELECTED_MINUTES',
		minute
	}
}

export const handleTimeSelect = (timeSelectStatus) => {
	return {
		type: 'HANDLE_TIME_SELECT',
		timeSelectStatus
	}
}

export const handleSubmitSelectedTime = (submitSelectedTime) => {
    return {
    	type: 'HANDLE_SUBMIT_SELECTED_TIME',
    	submitSelectedTime
    }
}

export const handleCompanyName = (name) => {
	return {
		type: 'HANDLE_COMPANY_NAME',
		name
	}
}

export const handleCompanyPosition = (position) => {
	return {
		type: 'HANDLE_COMPANY_POSITION',
		position
	}
}

export const handleSalaryBudget = (salary) => {
	return {
		type: 'HANDLE_SALARY_BUDGET',
		salary
	}
}

export const createAcount = (acount) => {
    return {
		type: 'CREATE_ACOUNT',
		acount
	}
}

export const createPassword = (password) => {
    return {
		type: 'CREATE_PASSWORD',
		password
	}
}

export const loginStatus = (status) => {
	return {
		type: 'LOGIN_STATUS',
		status
	}
}

export const userLoginAcount = (acount) => {
	return {
		type: 'USER_LOGIN_ACOUNT',
		acount
	}
}

export const userLoginPassword = (password) => {
	return {
		type: 'USER_LOGIN_PASSWORD',
		password
	}
}

export const showLogin = (status) => {
	return {
		type: 'SHOW_LOGIN',
		status
	}
}

export const setCurrentUser = (id) => {
	return {
		type: 'SET_CURRENT_USER',
		id
	}
}

export const showMenu = (status) => {
	return {
		type: 'SHOW_MENU',
		status
	}
}

export const showLoginSussced = (status) => {
	return {
		type: 'SHOW_LOGIN_SUSSCED',
		status
	}
}

export const showLoginError = (status) => {
	return {
		type: 'SHOW_LOGIN_ERROR',
		status
	}
}

export const showLogoutSussced = (status) => {
	return {
		type: 'SHOW_LOGOUT_SUSSCED',
		status
	}
}

export const showMessage = (status) => {
	return {
		type: 'SHOW_MESSAGE',
		status
	}
}

export const userInputMessage = (text) => {
	return {
		type: 'USER_INPUT_MESSAGE',
		text
	}
}