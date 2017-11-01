import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/actions';


const NavLink = (props) => {
    const { login, dispatch } = props;

    const handleShowMenu = () => {
        dispatch(actions.showMenu(false));
    }
    const handleShowLogin = () => {
        dispatch(actions.showLogin(true));
    }
    const toContactMe = () => {
        dispatch(actions.showMenu(false));
    }
    const removeCurrentUserId = () => {
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('currentUserAcount');
        dispatch(actions.showMenu(false));
        dispatch(actions.loginStatus(false));
        dispatch(actions.showLogoutSussced(true));
    }
    

    return (
        <div className="navgation-bar_content">
            <span
            onClick={handleShowMenu} 
            className="navgation-bar_content_close">
                X
            </span>
            { login.login && <div className="navgation-bar_content_link-block">
                <Link 
                  className="navgation-bar_content_link" to="/user">
                    前往您的帳戶管理頁面
                </Link>
                <p 
                  onClick={removeCurrentUserId}
                  className="navgation-bar_content_link">
                    登出 Logout
                </p>
            </div> }
            { !login.login && <div className="navgation-bar_content_link-block">
                <p 
                  onClick={handleShowLogin} 
                  className="navgation-bar_content_link" >
                  登入 Login
                </p>
                <a onClick={toContactMe} className="navgation-bar_content_link" href="#to-contact"> 
                    創建帳號 Signup
                </a>
            </div> }
        </div>
    );
}

export default connect()(NavLink);
