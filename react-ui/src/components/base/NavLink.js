import React from 'react';
import { Link } from 'react-router-dom'

const NavLink = () => {
    return (
        <div className="navgation-bar_content">
            <span className="navgation-bar_content_close">X</span>
            <div className="navgation-bar_content_link-block">
                <Link 
                  className="navgation-bar_content_link" to="/user">
                    前往您的帳戶管理頁面
                </Link>
                <Link 
                  className="navgation-bar_content_link" to="/">
                    登出 Logout
                </Link>
            </div>
            {/* <div>
                <Link className="navgation-bar_content_link" to="/user">登入 Login</Link>
                <Link className="navgation-bar_content_link" to="/user"> 創建帳號 Signup</Link>
            </div> */}
        </div>
    );
}

export default NavLink;
