import React from 'react';

import Slider from './SalarySlider';

const ContactInput = (props) => {

    return (
        <div className="contact_input">
            <div>
                <label>*您的公司名稱與所需職位</label>
                <i className="fa fa-university fa-2x" aria-hidden="true"></i> 
                <input type="text" placeholder="輸入您的公司名稱" />
            </div>
            <div>
                <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                <input type="text" placeholder="輸入您所需求之職位" />
            </div>
            <label>*創建用於此網頁之帳號</label>
            <div>
                <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                <input type="text" name="name" placeholder="輸入您的e-mail作為帳號" />
            </div>
            <div>
                <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
                <input type="text" name="name" placeholder="創建密碼" />
            </div>
            <label>*您方便的面試時間與預計的薪水區間</label>
            <div className="timeNsalary">
                <i className="fa fa-calendar-check-o fa-2x" aria-hidden="true"></i>
                <span>2017-10-25 星期三</span>
            </div>
            <div className="contact_input_timeNsalary">
                <Slider
                   minValue={40000}
                   maxValue={60000}
                   lowerValue={45000}
                   upperValue={48000}
               />
            </div>
            <div className="contact_input_submit">
              確認提交
            </div>
        </div>
    )
}

export default ContactInput;
