import React from 'react';
import headPhoto from '../../images/maguangchen.jpg';

const AboutMe = () => {
    return (
        <div className="about-me">
            <img className="about-me_photo" src={headPhoto} alt="Ma Guang Chen"/>
            <p className="about-me_content">
             您好，我叫馬廣辰今年26歲。<br/>
             曾在新創公司進行設計與網站管理，使用AWS與Wordpress架站等工作。
             上一份工作在東南旅遊任職 前端工程師，參與開發網站平台新產品線(React JS)，
             同時需要維護舊版(Angular JS)的網站，興趣是打籃球、寫程式、設計與插畫。
            </p>
        </div>
    )
}
export default AboutMe;