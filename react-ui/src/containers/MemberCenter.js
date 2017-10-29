import React from 'react';

import CompanyInfo from '../components/memberCenter/CompanyInfo';
import Message from '../components/base/Message';

const MemberCenter = () => {
    return (
        <div className="member-center">
            <div className="member-center_greeting">
                Hi! User kwn791122@gmail.com
            </div>
            <div className="member-center_companyArea">
                <CompanyInfo />
            </div>
            <Message />
        </div>
    );
}

export default MemberCenter;