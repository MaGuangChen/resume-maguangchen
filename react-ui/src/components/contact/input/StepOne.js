import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/actions';

const StepOne = (props) => {
    const { dispatch } = props;
    const handleAcountInput = (e) => {
        const acount = e.target.value;
        dispatch(actions.createAcount(acount));
    }
    const handlePasswordInput = (e) => {
        const password = e.target.value;
        dispatch(actions.createPassword(password));
    }

    return (
        <div>
            <label>*您的聯絡信箱與觀看留言密碼</label>
            <div>
                <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                <input onChange={handleAcountInput} type="text" placeholder="輸入您的e-mail作為帳號" />
            </div>
            <div>
                <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
                <input onChange={handlePasswordInput} type="text" placeholder="創建密碼" />
            </div>
            <div onClick={props.handleCreateAcount} className="contact_input_submit contact_input_sign-up">
            創辦帳號並繼續填寫<i className="fa fa-address-book-o fa-2x" aria-hidden="true"></i>
            </div>
            <div onClick={props.handleCreateAcount} className="contact_input_submit contact_input_login">
            已有帳號直接登入
            </div>
            下一步開始填寫您的公司資料與所需職位
      </div> 
    );
}

export default connect()(StepOne);

