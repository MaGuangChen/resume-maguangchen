import React from 'react';

const Gallery = (props) => {
    const { background, title, text, link } = props;
    const backgroundStyle = {
        background: `url(${background})center no-repeat`,
        backgroundSize: 'cover'
    }
    const linkTo = (e) => {
        e.preventDefault();
        window.open(`${link}`,'_blank');
    }
    return (
        <div onClick={linkTo} style={backgroundStyle}>
            <p>
                <a href={link} target="_blank">{title}</a>
                <a>{text}</a>
            </p>
        </div>
    )
}

export default Gallery;