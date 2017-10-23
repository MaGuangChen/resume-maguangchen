import React from 'react';
import { connect } from 'react-redux';
import headPhoto from '../../images/maguangchen.jpg';

const AboutMe = () => {
    return (
        <div className="about-me">
            <img className="about-me_photo" src={headPhoto} alt="Ma Guang Chen"/>
            <p className="about-me_content">
             您好，我叫馬廣辰今年26歲。<br/>
             我喜歡創造，因此也有接觸平面設計與3D列印...等技術，
             曾在新創公司進行設計與網站管理，使用AWS與Wordpress架站等工作。
             上一份工作在東南旅遊任職 前端工程師，參與開發網站平台新產品線，
             同時需要維護舊版(Angular JS)的網站，以及開發新版的網站(React JS)
             在東南後端工程師們是使用JAVA，client side的GraphQL使用react-Apollo
             ，興趣是打籃球、寫程式、設計與插畫。
            </p>
            <p>我覺得相對技能熟悉程度大概如下</p>
            <div className="percentage">
                Font-end Programing
                <div className="percentage_bar">
                    <div className="percentage_bar_1"></div>
               </div>
                Web Design
                <div className="percentage_bar">
                    <div className="percentage_bar_2"></div>
                </div>
                Back-end Programing
                <div className="percentage_bar">
                    <div className="percentage_bar_3"></div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;