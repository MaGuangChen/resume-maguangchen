import React from 'react';

import NavLink from '../components/base/NavLink';

const NavgationBar = (props) => {
    return (
        <div className="navgation-bar">
            <div className="navgation-bar_icon">
                <i className="fa fa-2x fa-bars" aria-hidden="true"></i>
            </div>
            <div>
                {/* <NavLink /> */}
            </div>
        </div>
    );
}

export default NavgationBar;