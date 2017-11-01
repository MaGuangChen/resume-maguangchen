import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import MsgForHome from './MsgForHome';
import fetchUsers from '../../queries/fetchUsers';
import * as actions from '../../actions/actions';

const MessageBox = (props) => {
    const login = localStorage.getItem('currentUserId') === null 
    ? false : true;
    // const { data } = props;

    const handleShowMessage = () => {
        if(login) {
            props.dispatch(actions.showMessage(true));
        } else {
            props.dispatch(actions.showLogin(true));
        }
    }

    return (
        <div>
        <div className="message-box">
            <i 
            onClick={handleShowMessage}
            className="fa fa-2x fa-comments-o" aria-hidden="true"></i>
        </div>
        { login && <MsgForHome /> }
        </div>
    )
}

export default connect()(MessageBox);
