import React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import Message from '../base/Message';

import fetchUserMessage from '../../queries/fetchUserMessage';
// import sendedMessage from '../../queries/sendedMessage';

const MessagePending = (props) => {
    const { acount, showMessage, userInputMessage } = props;
    const { messageFake, receiveMessageFake } = props;

    console.log(props.data);

    let receivedMessage = [''];
    if(!props.data.loading) {
        const sended = props.data.userMessage.message
        receivedMessage = sended.filter(m => m.sendToUserAcount === acount);
    }

    return (
        <div>
        { !props.data.loading &&
            <Message 
                acount={acount}
                receivedMessage={receivedMessage}
                showMessage={showMessage}
                userInputMessage={userInputMessage}
            />
        }
        </div>
    );
}

export default compose(
    graphql(fetchUserMessage, { 
        options: (props) => ({
            // this can be change
            variables: { userAcount: "kwn791122@gmail.com" } 
        }) 
    },{ name: 'fetchUserMessage'}),
)(MessagePending);
