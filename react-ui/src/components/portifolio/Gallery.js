import React from 'react';

const Gallery = (props) => {
    const { background, text } = props;
    const backgroundStyle = {
        background: `url(${background})center no-repeat`,
        backgroundSize: 'cover'
    }
    return (
        <div style={backgroundStyle}>
            <p>
                <a>{text}</a>
            </p>
        </div>
    )
}

export default Gallery;