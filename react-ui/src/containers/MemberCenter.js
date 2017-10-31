import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import Spiner from '../components/memberCenter/Spiner';
import CompanyInfo from '../components/memberCenter/CompanyInfo';
import Message from '../components/base/Message';

import fetchUser from '../queries/fetchUser';

const MemberCenter = (props) => {
    const currentId = localStorage.getItem('currentUserId');
    window.addEventListener("load", function check(){
        if(currentId) {
            window.removeEventListener("load", check, false);
        } else if(currentId === null) {
            window.location.href = '/';
        }
    });

    const { user, loading } = props.data;
    
    return (
      <div>
        { loading && <Spiner /> }
        { !loading && 
            <div className="member-center">
                <div className="member-center_greeting">
                    Hi! {user.acount}
                </div>
                <div className="member-center_companyArea">
                    <CompanyInfo user={user}/>
                </div>
                {/* <Message /> */}
            </div> 
        }
      </div>  
    );
}

const currentId = localStorage.getItem('currentUserId');
const memberCenterWithGraphQL = graphql(fetchUser, { 
    options: { 
      variables: { id: currentId } }
    }, { name: "user" } )(MemberCenter);

export default connect((state) => {
  return { login: state.login }
})(memberCenterWithGraphQL);
