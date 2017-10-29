import React from 'react';

import headPhoto from '../../images/maguangchen.jpg';
import userDefaultPhoto from '../../images/user-default-photo.png';

const Message = () => {
    const message = ( 
    <div className="message_content_message">
        <span>
            <p>您好我是測試科技，跟你約這個時間ok嗎?</p>
            <img 
            className="message_content_user-head-photo" 
            src={userDefaultPhoto} alt="Ma Guang Chen"/>
        </span>
    </div>
    );
    const receiveMessage = ( 
        <div className="message_content_receiveMessage">
            <span>
                <img 
                className="message_content_user-head-photo" 
                src={headPhoto} alt="Ma Guang Chen"/>
                <p>okok的，到時見啦</p>
            </span>
        </div>
        );
    return (
        <div>
            <div className="login-background"></div>
            <div className="message">
                <div className="message_title">
                <p>Message</p><span>X</span>
                </div>
                <div className="message_content">
                    {message}
                    {receiveMessage}
                    {message}
                    {receiveMessage}
                    {message}
                    {receiveMessage}
                    {message}
                    {receiveMessage}
                    {message}
                    {receiveMessage}
                </div>
                <div className="message_input">
                    <input type="text" placeholder="輸入訊息" />
                    <div className="message_input_button">送出</div>
                </div>
            </div>
        </div>
    )
};

export default Message;