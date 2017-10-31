import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Calendar from '../../contact/input/Calendar';
import * as actions from '../../../actions/actions';

class ContentSpan extends Component {
    constructor(props){
        super(props)
        this.state = {
            showInput: false,
            title: this.props.title,
            text: this.props.text,
            inputType: '',
        }
        this.showInput = this.showInput.bind(this);
        this.sumbitInput = this.sumbitInput.bind(this);
        this.changeInputValue = this.changeInputValue.bind(this);
        this.handleReservationDate = this.handleReservationDate.bind(this);
    }

    showInput() {
        const keyName = this.props.keyName;
        if(keyName !== 'reservationDate' && keyName !== 'salary'){
            this.setState({ showInput: !this.state.showInput });
        } else {
            const inputType = keyName === 'reservationDate' 
            ? 'reservationDate' : 'salary'
            this.setState( { inputType } );
            this.setState( { showInput: !this.state.showInput } );
            if(inputType === 'reservationDate') {
                const status = !this.props.showCalendar;
                this.props.dispatch(actions.handleCalendar(status));
            }
        }
    }

    sumbitInput() {
        const value = this.state.text;
        let variables = this.props.variables;
        variables[`${this.props.keyName}`] = value

        this.setState({ showInput: false });
        this.props.mutate({
            variables
        })
    }

    changeInputValue(e){
        const text = e.target.value;
        this.setState({ text });
    }

    handleReservationDate() {
        const { year, month, hour, minute} = this.props;
        const date = this.props.date.date();
        let minuteParse = minute;
        if(minute === '00') {
            minuteParse = 0;
        }
        const reservationDateArray = [year, month, date, hour, minuteParse];
        const day = moment(`${year}-${month}-${date}`);
        const cnWeekDay = ['日', '一', '二', '三', '四', '五', '六'];    
        const text = `${year}年${month}月${date}日 
            星期${cnWeekDay[day.day()]} ${hour} 點 ${minute} 分`;      
        this.setState({ 
            showInput: false,
            text
         });
         let variables = this.props.variables;
         variables[`${this.props.keyName}`] =  `[${reservationDateArray}]`;
         this.props.mutate({
            variables
        })
    }

    render(){
        const { showInput, title, text, inputType } = this.state;
        const { year, month, date, timeSelectStatus, showCalendar } = this.props;      

        return (
            <span>
                <p className="member-center_companyArea_block_content_title">
                    <i 
                    onClick={this.showInput}
                    className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    { title }:
                </p>
                { !showInput && 
                <p className="member-center_companyArea_block_content_text">
                    { text }
                </p>
                }
                { showInput && inputType === '' &&
                <div className="member-center_companyArea_block_content_input">
                    <input
                      onChange={this.changeInputValue} 
                      type="text" placeholder={`輸入${title}`}/>
                    <div 
                      onClick={this.sumbitInput}
                      className="member-center_companyArea_block_content_input_button">
                        確認
                    </div>
                </div> 
                }
                { showCalendar && showInput && inputType === 'reservationDate' &&
                    <div>
                        <Calendar 
                            year={year}
                            month={month}
                            date={date}
                            timeSelectStatus={timeSelectStatus}
                            showCalendar={showCalendar}
                            page='user'
                            handleReservationDate={this.handleReservationDate}
                        />
                    </div>
                }
            </span>
        );
    }
}

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
    }
  })(ContentSpan);
