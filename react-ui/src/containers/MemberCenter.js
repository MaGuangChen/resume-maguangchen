import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import CompanyInfo from '../components/memberCenter/CompanyInfo';
import Message from '../components/base/Message';

import fetchUser from '../queries/fetchUser';

const MemberCenter = (props) => {
    console.log(props.data);
    const currentId = localStorage.getItem('currentUserId');
    window.addEventListener("load", function check(){
        if(currentId) {
            window.removeEventListener("load", check, false);
        } else if(currentId === null) {
            window.location.href = '/';
        }
    });
    const spiner = (
        <div className="member-center">
            <div className="member-center_loading">
                Loading ...
                <i className="fa fa-spinner" aria-hidden="true"></i>
            </div>
        </div>
    )

    let sussced = <div></div>;
    if(!props.data.loading){
        const user = props.data.user;
        sussced = (
            <div className="member-center">
                <div className="member-center_greeting">
                    Hi! {user.acount}
                </div>
                <div className="member-center_companyArea">
                    <CompanyInfo user={user}/>
                </div>
                {/* <Message /> */}
            </div> 
        );
    }
    
    return (
      <div>
        { props.data.loading && spiner }
        { !props.data.loading && sussced }
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
