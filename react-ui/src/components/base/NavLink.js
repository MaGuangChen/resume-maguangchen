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
                <a className="navgation-bar_content_link" to="/user"> 創建帳號 Signup</a>
            </div> }
        </div>
    );
}

export default connect()(NavLink);
