import React from 'react';

const Login = () => {
    return (
        <div className="login">
            <div className="login_title">
                <p>登入Login</p>
                <span>X</span>
            </div>
            <div className="login_input">
                <div>
                    <i className="fa fa-user-o fa-2x" aria-hidden="true"></i>
                    <input type="text" placeholder="輸入您的e-mail信箱" />
                </div>
                <div>
                    <i className="fa fa-key fa-2x" aria-hidden="true"></i>
                    <input type="text" placeholder="輸入您管理此網頁之密碼" />
                </div>
            </div>
            <div className="login_submit">
                <div className="login_submit_login">進入管理介面</div>
                <div className="login_submit_signup">
                    <p>沒有帳號嗎?</p> <a>創建帳號</a>
                </div>
            </div>
        </div>
    )
}

export default Login;