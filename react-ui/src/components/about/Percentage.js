import React from 'react';

const Percentage = (props) => {
    const { title, img, alt, percentage, backgroundColor, imgSize } = props;
    const displayTitle = `${title} ${percentage}%`;
    const barStyle = {
            width: `${percentage}%`,
            background: backgroundColor, 
    };
    const barBorder = {
        border: `.05em solid  ${backgroundColor}`,
    }
    const imgStyle = `percentage_title_img_${imgSize}`
    return (
        <div className="percentage">
            <div className="percentage_title">
                <p>{ displayTitle }</p>
                <img className={imgStyle} src={img} alt={alt} />
                </div>
            <div style={ barBorder } className="percentage_bar">
            <div style={ barStyle } className="percentage_bar_percent"></div>
            </div>
        </div>
    );
}

export default Percentage;