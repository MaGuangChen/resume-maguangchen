import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';
import moment from 'moment';

import * as actions from '../../actions/actions';
import sendMessageMutation from '../../mutations/sendMessage';

const SendMessage = (props) => {
    const { userInputMessage, userAcount } = props;

    const handleUserInputMessage = (e) => {
        const text = e.target.value;
        props.dispatch(actions.userInputMessage(text));
    }

    const sendMessageMutate = () => {
        if(userInputMessage !== '') {
            props.sendMessage({
                variables: {
                    userAcount: userAcount,
                    text: userInputMessage,
                    createdTime: moment().unix(),
                    // this can be change
                    sendToUserAcount: "kwn791122@gmail.com"
                }
            })
        }
    }

    return (
        <div className="message_input">
            <input onChange={handleUserInputMessage} type="text" placeholder="輸入訊息" />
            <div
            onClick={sendMessageMutate} 
            className="message_input_button">送出</div>
        </div>
    );
}

const SendMessageWithMutation = compose(
    graphql(sendMessageMutation, { name: 'sendMessage' }),
)(SendMessage);


export default connect((state) => {
    return { userInputMessage: state.message.userInputMessage }
})(SendMessageWithMutation);