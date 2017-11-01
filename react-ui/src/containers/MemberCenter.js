import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import Spiner from '../components/memberCenter/Spiner';
import CompanyInfo from '../components/memberCenter/CompanyInfo';
import MessagePending from '../components/memberCenter/MessagePending';
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
    const { showMessage, userInputMessage } = props.message;

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
                { showMessage &&
                <MessagePending
                    acount={user.acount}
                    showMessage={showMessage}
                    userInputMessage={userInputMessage}
                /> 
                }
            </div> 
        }
      </div>  
    );
}

const currentId = localStorage.getItem('currentUserId');

const memberCenterWithGraphQL = compose(
    graphql(fetchUser, { 
        options: { variables: { id: currentId } } }, 
        { name: "user" }),
)(MemberCenter);

export default connect((state) => {
  return { 
      message: state.message 
    }
})(memberCenterWithGraphQL);
