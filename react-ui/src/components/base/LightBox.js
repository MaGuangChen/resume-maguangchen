import React from 'react';

const LightBox = (props) => {
    const { title, text, handleClose, page } = props; 
    let changeStyle = {
        position: 'fixed',
    }
    if(page === 'home'){
        changeStyle = {
            position: 'absolute',
        }
    }
    return (
        <div style={changeStyle} className="light-box">
            <div className="light-box_content">
                <div className="light-box_title">
                <p>{title}</p>
                </div>
                <div className="light-box_text">
                    <p>{text}</p>
                    <div onClick={handleClose} className="light-box_close-button">Close</div>
                </div>
            </div>
        </div>
    );
}

export default LightBox;