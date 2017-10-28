import React from 'react';
import { connect } from 'react-redux';

import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';
// import * as actions from './actions/actions';

import ContactInput from '../components/contact/ContactInput';

const Contact = (props) => {
    const currentId = JSON.parse(localStorage.getItem('currentUserId'));
    return (
      <div id="to-contact">
        <div className="contact">
        <p className="contact_title">Contact Me</p>
            { !props.login && currentId === null && <ContactInput /> }
        </div>
      </div>
    )
}

export default connect((state) => {
    return { login: state.login.login }
})(Contact);

//currentUser !== null contactinput can show