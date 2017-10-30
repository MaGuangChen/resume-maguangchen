import React from 'react';
import { connect } from 'react-redux';

import NavLink from '../components/base/NavLink';
import * as actions from '../actions/actions';


const NavgationBar = (props) => {
    const { dispatch, showMenu } = props;
    const handleShowMenu = () => {
        dispatch(actions.showMenu(true));
    }

    return (
        <div className="navgation-bar">
            { !showMenu && 
            <div 
            onClick={handleShowMenu} 
            className="navgation-bar_icon">
                <i className="fa fa-2x fa-bars" aria-hidden="true"></i>
            </div> }
            <div>
                { showMenu && 
                  <NavLink 
                  login={props.login}
                  /> }
            </div>
        </div>
    );
}

export default connect((state) => {
    return { 
        showMenu: state.menuStatus.showMenu, 
    }
})(NavgationBar);