import React from 'react';
import { connect } from 'react-redux';

import LightBox from './LightBox';
import * as actions from '../../actions/actions';

const Login = (props) => {
    const { dispatch, data, password, acount, loginError } = props;
    const handleShowLogin = () => {
        dispatch(actions.showLogin(false));
    }

    const handleAcountInput = (e) => {
        const acount = e.target.value;
        dispatch(actions.userLoginAcount(acount));
    }
    const handlePasswordInput = (e) => {
        const password = e.target.value;
        dispatch(actions.userLoginPassword(password));
    }

    const loginSubmit = () => {
        const user = data.users.filter(u => u.acount === acount && u.password === password);

        if(user){
            if(user.length === 1) {
                localStorage.setItem('currentUserId', user[0].id);
                localStorage.setItem('currentUserAcount', user[0].acount);
                dispatch(actions.setCurrentUser(user[0].id));
                dispatch(actions.showMenu(false));
                dispatch(actions.showLogin(false));
                dispatch(actions.loginStatus(true));
                dispatch(actions.showLoginSussced(true));

                window.location.href='/user';
            } else {
                dispatch(actions.showLoginError(true));
            }
        } else {
            dispatch(actions.showLoginError(true));
        }
    }

    const closeLoginErrorLightBox = () => {
        dispatch(actions.showLoginError(false));
    }
    
    return (
        <div className="login">
            { loginError &&
              <LightBox
               title="登入失敗"
               text="您好，帳號密碼有誤"
               handleClose={closeLoginErrorLightBox}
               />
            }
            <div className="login_title">
                <p>登入Login</p>
                <span onClick={handleShowLogin}>X</span>
            </div>
            <div className="login_input">
                <div>
                    <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
                    <input
                      onChange={handleAcountInput} 
                      type="text" 
                      placeholder="輸入您的e-mail信箱" />
                </div>
                <div>
                    <i className="fa fa-key fa-2x" aria-hidden="true"></i>
                    <input
                      onChange={handlePasswordInput} 
                      type="text" 
                      placeholder="輸入您用於此網頁之密碼" />
                </div>
            </div>
            <div className="login_submit">
                <div 
                    onClick={loginSubmit} 
                    className="login_submit_login">
                    進入管理介面
                </div>
                <div className="login_submit_signup">
                    <p>沒有帳號嗎?</p> <a>創建帳號</a>
                </div>
            </div>
        </div>
    )
}

export default connect((state) => {
    return { 
        acount: state.login.acount, 
        password: state.login.password,
        loginError: state.menuStatus.showLoginError, 
    }
})(Login);