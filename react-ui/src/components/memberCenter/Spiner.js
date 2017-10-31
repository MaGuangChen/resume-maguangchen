import React from 'react';

const Spiner = () => {
    return (
        <div className="member-center">
            <div className="member-center_loading">
                Loading ...
                <i className="fa fa-spinner" aria-hidden="true"></i>
            </div>
        </div>
        )
}

export default Spiner;