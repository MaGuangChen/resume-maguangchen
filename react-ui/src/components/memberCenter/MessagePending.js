import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import Message from '../base/Message';
import fetchUserMessage from '../../queries/fetchUserMessage';


class MessagePending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetch: false,
        }
    }
    render(){
        const { acount, showMessage, userInputMessage } = this.props;

        let receivedMessage = [''];
        if(!this.props.data.loading) {
            const received = this.props.data.userMessage.message;
            receivedMessage = received.filter(m => m.sendToUserAcount === acount);
        }
    
        return (
            <div>
                { !this.props.data.loading &&
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
}

export default compose(
    graphql(fetchUserMessage, { 
        options: (props) => ({
            // this can be change
            variables: { userAcount: "kwn791122@gmail.com" } 
        }) 
    },{ name: 'fetchUserMessage'}),
)(MessagePending);
