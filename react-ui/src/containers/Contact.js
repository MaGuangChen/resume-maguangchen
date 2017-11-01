import React from 'react';
import { connect } from 'react-redux';

import ContactInput from '../components/contact/ContactInput';

const Contact = (props) => {
    return (
      <div id="to-contact">
        <div className="contact">
        <p className="contact_title">Contact Me</p>
            { !props.login  && <ContactInput /> }
        </div>
      </div>
    )
}

export default connect((state) => {
    return { login: state.login.login }
})(Contact);
