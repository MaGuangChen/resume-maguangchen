import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import MessagePending from '../memberCenter/MessagePending';
import fetchUser from '../../queries/fetchUser';


const MsgForHome = (props) => {
    const { user, loading } = props.data;
    const { showMessage, userInputMessage } = props.message;

    return (
        <div>
            { !loading && showMessage && <MessagePending 
                    acount={user.acount}
                    showMessage={showMessage}
                    userInputMessage={userInputMessage}
            /> }
        </div>
    )
}

const currentId = localStorage.getItem('currentUserId');

const MsgForHomeWithGraphQL = compose(
    graphql(fetchUser, { 
        options: { variables: { id: currentId } } }, 
        { name: "user" }),
)(MsgForHome);

export default connect((state) => {
    return { 
        message: state.message 
      }
  })(MsgForHomeWithGraphQL);