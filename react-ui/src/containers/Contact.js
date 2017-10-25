import React from 'react';
import { connect } from 'react-redux';

import ContactInput from '../components/contact/ContactInput';

const Contact = (props) => {
    return (
      <div id="to-contact">
        <div className="contact">
            <p className="contact_title">Contact</p>
            <p>我的聯絡資訊:</p>
            <p>電子信箱: kwn791122@gmail.com</p>
            <p>手機: 0915791122</p>
            <ContactInput />
        </div>
      </div>
    )
}

export default connect()(Contact);