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