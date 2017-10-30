import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import CompanyInfo from '../components/memberCenter/CompanyInfo';
import Message from '../components/base/Message';

import fetchUser from '../queries/fetchUser';

const MemberCenter = (props) => {
    console.log(props.data);
    return (
        <div className="member-center">
            <div className="member-center_greeting">
                Hi! User kwn791122@gmail.com
            </div>
            <div className="member-center_companyArea">
                <CompanyInfo />
            </div>
            {/* <Message /> */}
        </div>
    );
}

// export default MemberCenter;

const memberCenterWithGraphQL = graphql(fetchUser, { 
    options: { 
      variables: { id: localStorage.getItem('currentUserId') } }
    }, { name: "user" } )(MemberCenter);

export default connect((state) => {
  return { login: state.login }
})(memberCenterWithGraphQL);