import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import SendMessage from './SendMessage';
import headPhoto from '../../images/maguangchen.jpg';
import userDefaultPhoto from '../../images/user-default-photo.png';
import * as actions from '../../actions/actions';
import fetchUserMessage from '../../queries/fetchUserMessage';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendedMessage: [],
            receivedMessage: this.props.receivedMessage,
            allMessage: [],
            allMessageDom: [],
            fetch: false, 
        }
    }

    render() {
        console.log(this.props.data);
        let { sendedMessage, receivedMessage, allMessage, allMessageDom } = this.state;
        if(!this.props.data.loading) {
            const sended = this.props.data.userMessage.message
            sendedMessage = sended.filter(m => m.sendToUserAcount === "kwn791122@gmail.com");

            const sendedMessageDom = sendedMessage.map((m) => {
                    const domAndTime = {
                        dom: (
                            <div key={m.createdTime} className="message_content_message">
                                <span>
                                    <p>{m.text}</p>
                                    <img 
                                    className="message_content_user-head-photo" 
                                    src={userDefaultPhoto} alt="Ma Guang Chen"/>
                                </span>
                            </div>
                        ),
                        createdTime: m.createdTime,
                    }
                    return domAndTime;
            });
            const receiveMessageDom = receivedMessage.map((rm) => {
                const domAndTime = {
                    dom: (
                        <div key={rm.createdTime} className="message_content_receiveMessage">
                            <span>
                                <img 
                                className="message_content_user-head-photo" 
                                src={headPhoto} alt="Ma Guang Chen"/>
                                <p>{rm.text}</p>
                            </span>
                        </div>
                    ),
                    createdTime: rm.createdTime
                }
                return domAndTime;
            });

            allMessage = [...receiveMessageDom, ...sendedMessageDom];
            allMessage = allMessage.sort(function (a, b) {
                return a.createdTime - b.createdTime ;
            });
            allMessageDom = allMessage.map(dom => dom.dom);
        }

        const handleShowMessage = () => {
            this.props.dispatch(actions.showMessage(false));
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
                        {allMessageDom}
                    </div>
                    <SendMessage userAcount={this.props.acount}/>
                </div>
            </div>
        )
    }
    
};

const messageWithGraphQL = compose(
    graphql(fetchUserMessage, { 
        options: (props) => ({
            variables: { userAcount: props.acount } 
        }) 
    },{ name: 'sendedMessage'}),
)(Message);

export default connect()(messageWithGraphQL);