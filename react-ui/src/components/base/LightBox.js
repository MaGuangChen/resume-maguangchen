import React from 'react';

const LightBox = () => {
    return (
        <div className="light-box">

            <div className="light-box_title">
            <p>創建帳號失敗</p>
            </div>
            <div className="light-box_text">
                <p>您好，<br/>
                關於創建帳號失敗的原因可能是您曾申請過帳號，<br/>
                因此e-mail信箱重複了。
                或是您所輸入的帳號少於9個字元
                也代表著您的帳號不是有效的e-mail信箱</p>
                <div className="light-box_close-button">Close</div>
            </div>
        </div>
    );
}

export default LightBox;