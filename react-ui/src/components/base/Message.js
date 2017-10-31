import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';
// import gql from 'graphql-tag';
import moment from 'moment';

import headPhoto from '../../images/maguangchen.jpg';
import userDefaultPhoto from '../../images/user-default-photo.png';
import * as actions from '../../actions/actions';
import message from '../../mutations/message';

class Message extends Component {
    render() {
        const handleShowMessage = () => {
            this.props.dispatch(actions.showMessage(false));
        }
        const userInputMessage = (e) => {
            const text = e.target.value;
            this.props.dispatch(actions.userInputMessage(text));
        }
    
        const { message, receiveMessage } = this.props;
    
        const messageDisplay = message.map((m) => {
            return (
                <div key={m.time} className="message_content_message">
                    <span>
                        <p>{m.text}</p>
                        <img 
                        className="message_content_user-head-photo" 
                        src={userDefaultPhoto} alt="Ma Guang Chen"/>
                    </span>
                </div>
            );
        });
    
        const receiveMessageDisplay = receiveMessage.map((rm) => {
            return (
                <div key={rm.time} className="message_content_receiveMessage">
                    <span>
                        <img 
                        className="message_content_user-head-photo" 
                        src={headPhoto} alt="Ma Guang Chen"/>
                        <p>{rm.text}</p>
                    </span>
                </div>
            )
        });
        console.log(this.props);
    
        const sendMessageMutate = () => {
            const { id, userInputMessage } = this.props;
            console.log(userInputMessage);
            console.log(id);
            const text = "userInputMessage";
            const time = "[2017,10,31,10,20]"
            this.props.handleMessageMutate();
            // this.props.sendMessage({
            //     vaiables: {
            //         userId: "59f3964c8449921870b5a1b8",
            //         text,
            //         time
            //     }
            // })
            // .catch((res) => {
            //     const errors = res.graphQLErrors.map((error) => {
            //       return error;
            //     });
            //     console.log(errors[0].message);
            //   });
        }
        
        return (
            <div>
                <div className="login-background"></div>
                <div className="message">
                    <div className="message_title">
                    <p>Message</p>
                    <span onClick={handleShowMessage}>X</span>
                    </div>
                    <div className="message_content">
                        {receiveMessageDisplay}
                        {messageDisplay}
                    </div>
                    <div className="message_input">
                        <input onChange={userInputMessage} type="text" placeholder="輸入訊息" />
                        <div
                        onClick={sendMessageMutate} 
                        className="message_input_button">送出</div>
                    </div>
                </div>
            </div>
        )
    }
    
};

// const messageWithGraphQL = compose(
//     graphql(message.sendMessage, { name: 'sendMessage'}),
// )(Message);

export default connect((state) => {
    return { userInputMessage: state.message.userInputMessage }
})(Message);