import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import Spiner from '../components/memberCenter/Spiner';
import CompanyInfo from '../components/memberCenter/CompanyInfo';
import Message from '../components/base/Message';

import message from '../mutations/message';
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

    const handleMessageMutate = () => {
        const text = "userInputMessage";
        const time = "[2017,10,31,10,20]"
        props.sendMessage({
            vaiables: {
                acount: "kwn791122@gmail.com",
                text,
                time
            }
        })
        .catch((res) => {
            const errors = res.graphQLErrors.map((error) => {
              return error;
            });
            console.log(errors[0].message);
          });
    }

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
                <Message 
                    id={user.id}
                    message={user.message}
                    receiveMessage={user.receiveMessage}
                    showMessage={showMessage}
                    userInputMessage={userInputMessage}
                    handleMessageMutate={handleMessageMutate}
                /> 
                }
            </div> 
        }
      </div>  
    );
}

const currentId = localStorage.getItem('currentUserId');
// const memberCenterWithGraphQL = graphql(fetchUser, { 
//     options: { 
//       variables: { id: currentId } }
//     }, { name: "user" } )(MemberCenter);

const memberCenterWithGraphQL = compose(
    graphql(fetchUser, { 
        options: { 
        variables: { id: currentId } }
        }, { name: "user" } 
    ),
    graphql(message, { name: 'sendMessage'}),
)(MemberCenter);
export default connect((state) => {
  return { 
      login: state.login,
      message: state.message 
    }
})(memberCenterWithGraphQL);
