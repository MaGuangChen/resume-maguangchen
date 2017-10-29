import React from 'react';

import CompanyInfo from './../components/memberCenter/CompanyInfo';

const MemberCenter = () => {
    return (
        <div className="member-center">
            <div className="member-center_greeting">
                Hi! User kwn791122@gmail.com
            </div>
            <div className="member-center_companyArea">
                <CompanyInfo />
                <CompanyInfo />
                <CompanyInfo />
                <CompanyInfo />
            </div>
            {/* <input type="text" placeholder="修改公司名稱" /> */}
        </div>
    );
}

export default MemberCenter;