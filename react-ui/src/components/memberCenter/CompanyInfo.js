import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import ContentSpan from './companyInfo/ContenSpan';
import editMutation from '../../mutations/editCompany';

const CompanyInfo = (props) => {
    const company = props.user.company[0];
    const id = company.id;
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
    const minuteString = minute === 0 ? '00' : minute;
    const day = moment(`${year}-${month}-${date}`);
    const cnWeekDay = ['日', '一', '二', '三', '四', '五', '六'];    
    const selectedInterviewTime = `${year}年${month}月${date}日 
        星期${cnWeekDay[day.day()]} ${hour} 點 ${minuteString} 分`;
        
    const location = company.location ? company.location : '新增您的公司位置';
    const phoneNumber = company.phoneNumber ? company.phoneNumber : '新增您的公司連絡電話';
    const contactPeople = company.contactPeople ? company.contactPeople : '新增您公司的聯絡人';

    return (
        <div className="member-center_companyArea_block">
            <div className="member-center_companyArea_block_content">
                <div className="member-center_companyArea_block_content_company-name">
                    { name }
                </div>
                <ContentSpan 
                    title="職缺內容" text={position} 
                    mutate={props.position}
                    variables={ { id, position: ''} }
                    keyName={'position'}
                />
                <ContentSpan 
                    title="面試時間" 
                    text={selectedInterviewTime}
                    mutate={props.reservationDate}
                    variables={ { id, reservationDate: ''} }
                    keyName={'reservationDate'}
                />
                <ContentSpan 
                    title="薪資範圍" 
                    text={salaryRange} 
                    mutate={props.minSalary}
                    mutate2={props.maxSalary}
                    variables={ { id, minSalary: ''} }
                    variables2={ { id, maxSalary: '' } }
                    keyName={'salary'}
                />
                <ContentSpan 
                    title="公司地點" 
                    text={location}
                    mutate={props.location}
                    variables={ { id, location: ''} }
                    keyName={'location'}
                />
                <ContentSpan 
                    title="公司電話" 
                    text={phoneNumber} 
                    mutate={props.phone}
                    variables={ { id, phoneNumber: ''} }
                    keyName={'phoneNumber'}
                />
                <ContentSpan 
                    title="聯絡人" 
                    text={contactPeople} 
                    mutate={props.contactPeople}
                    variables={ { id, contactPeople: ''} }
                    keyName={'contactPeople'}
                />    
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

const infoWithMutation = compose(
    graphql(editMutation.position, { name: 'position' }),
    graphql(editMutation.location, { name: 'location' }),
    graphql(editMutation.phone, { name: 'phone' }),
    graphql(editMutation.contactPeople, { name: 'contactPeople' }),
    graphql(editMutation.minSalary, { name: 'minSalary' }),
    graphql(editMutation.maxSalary, { name: 'maxSalary' }),
    graphql(editMutation.reservationDate, { name: 'reservationDate' }),
)(CompanyInfo);

export default connect((state) => {
    return { editStatus: state.userEditStatus }
})(infoWithMutation);
