import React from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

const CompanyInfo = (props) => {
    const company = props.user.company[0];
    const { editStatus, dispatch } = props;
    const { name, position, minSalary, maxSalary } = company;
    const dateArray = JSON.parse(company.reservationDate);
    const [year, month, date, hour, minute] = dateArray;

    const parseStr2Money = (value)=> {
        let num = value.toString();
        const pattern = /(-?\d+)(\d{3})/;
        while(pattern.test(num)){
          num = num.replace(pattern, "$1,$2");
        }
        return `$${num}`
    };
    const salaryRange = `${parseStr2Money(minSalary)} ~ ${parseStr2Money(maxSalary)}`;
    
    const day = moment(`${year}-${month}-${date}`);
    const cnWeekDay = ['日', '一', '二', '三', '四', '五', '六'];    
    const selectedInterviewTime = `${year}年${month}月${date}日 
        星期${cnWeekDay[day.day()]} ${hour} 點 ${minute} 分`;
        
    const location = company.location ? company.location : '新增您的公司位置';
    const phoneNumber = company.phoneNumber ? company.phoneNumber : '新增您的公司連絡電話';
    const eMail = company.eMail ? company.eMail : '新增您公司的聯絡信箱';
    const contactPeople = company.contactPeople ? company.contactPeople : '新增您公司的聯絡人';

    console.log(editStatus);

    return (
        <div className="member-center_companyArea_block">
            <div className="member-center_companyArea_block_content">
                <div className="member-center_companyArea_block_content_company-name">
                    { name }
                </div>
                <ContentSpan title="職缺內容" text={position} />
                <ContentSpan 
                  title="面試時間" 
                  text={selectedInterviewTime}
                />
                <ContentSpan title="薪資範圍" text={salaryRange} />
                <ContentSpan 
                  title="公司地點" 
                  text={location} 
                />
                <ContentSpan title="公司電話" text={phoneNumber} />
                <ContentSpan title="聯絡人" text={contactPeople} />    
                <ContentSpan title="聯絡信箱" text={eMail} />
                <div className="member-center_companyArea_block_content_message">
                    Message
                    <i 
                      className="fa fa-3x fa-comments-o" 
                      aria-hidden="true">
                    </i>
                </div>
            </div>
        </div>
    );
}

const ContentSpan = (props) => {
    const { title, text } = props;
    return (
        <span>
            <p className="member-center_companyArea_block_content_title">
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            { title }:
            </p>
            <p className="member-center_companyArea_block_content_text">
                { text }
            </p>
            
        </span>
    );
}

export default connect((state) => {
    return { editStatus: state.userEditStatus }
})(CompanyInfo);