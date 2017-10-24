import React from 'react';
import Circle from 'rc-progress';

import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import html5 from '../../images/html5.svg';
import scss from '../../images/scss.svg';
import graphQL from '../../images/graphQL.svg';
import webpack from '../../images/webpack.svg';
import node from '../../images/node.svg';
import expressImg from '../../images/express.svg';
import mongoDB from '../../images/mongoDB.svg';
import firebase from '../../images/firebase.svg';


const Skill = () => {
    const CirclePercentage = Circle.Circle;

    return (
        <div className="skill">
            <p>以相對熟悉程度區分</p>
            <p>熟悉程度高 :<br/>React、Redux、HTML5、SCSS</p>
            <div className="circle-percentage">
                <CirclePercentage className="circle-percentage_circle" percent="95" strokeWidth="2" trailColor="#D9D9D9" strokeColor="#3FC7FA" />
                <img className="circle-percentage_svg circle-percentage_svg_lg" src={react} alt="react-svg"/>
                <p className="circle-percentage_text">95%</p>
            </div>
            <div className="circle-percentage">
                <CirclePercentage className="circle-percentage_circle" percent="85" strokeWidth="2" trailColor="#D9D9D9" strokeColor="#764ABC" />
                <img className="circle-percentage_svg circle-percentage_svg_m" src={redux} alt="redux-svg"/>
                <p className="circle-percentage_text">85%</p>
            </div>
            <div className="circle-percentage line2">
                <CirclePercentage className="circle-percentage_circle" percent="90" strokeWidth="2" trailColor="#D9D9D9" strokeColor="#F16529" />
                <img className="circle-percentage_svg circle-percentage_svg_m" src={html5} alt="html5-svg"/>
                <p className="circle-percentage_text">90%</p>
            </div>
            <div className="circle-percentage line2">
                <CirclePercentage className="circle-percentage_circle" percent="95" strokeWidth="2" trailColor="#D9D9D9" strokeColor="#CD6799" />
                <img className="circle-percentage_svg circle-percentage_svg_l" src={scss} alt="scss-svg"/>
                <p className="circle-percentage_text">95%</p>
            </div>
            <p className="line3">熟悉程度中等 :<br/>GraphQL、Webpack</p>
            <div className="circle-percentage line3">
                <CirclePercentage className="circle-percentage_circle" percent="85" strokeWidth="2" trailColor="#D9D9D9" strokeColor="#E535AB" />
                <img className="circle-percentage_svg circle-percentage_svg_m" src={graphQL} alt="graphQL-svg"/>
                <p className="circle-percentage_text">85%</p>
            </div>
            <div className="circle-percentage line3">
                <CirclePercentage className="circle-percentage_circle" percent="75" strokeWidth="2" trailColor="#D9D9D9" strokeColor="#6F95DB" />
                <img className="circle-percentage_svg circle-percentage_svg_s" src={webpack} alt="webpack-svg"/>
                <p className="circle-percentage_text">75%</p>
            </div>
            <p className="line4">掌握中曾應用於專案 :<br/>Node、Express、MongoDB、Firebase</p>
            <div className="circle-percentage line4">
                <CirclePercentage className="circle-percentage_circle" percent="70" strokeWidth="2" trailColor="#D9D9D9" strokeColor="#8CC84B" />
                <img className="circle-percentage_svg circle-percentage_svg_m" src={node} alt="node-svg"/>
                <p className="circle-percentage_text">70%</p>
            </div>
            <div className="circle-percentage line4">
                <CirclePercentage className="circle-percentage_circle" percent="70" strokeWidth="2" trailColor="#D9D9D9" strokeColor="#696969" />
                <img className="circle-percentage_svg circle-percentage_svg_customSize" src={expressImg} alt="expressImg-svg"/>
                <p className="circle-percentage_text">60%</p>
            </div>
            <div className="circle-percentage line5">
                <CirclePercentage className="circle-percentage_circle" percent="60" strokeWidth="2" trailColor="#D9D9D9" strokeColor="#4EB13F" />
                <img className="circle-percentage_svg circle-percentage_svg_customSize" src={mongoDB} alt="mongoDB-svg"/>
                <p className="circle-percentage_text">60%</p>
            </div>
            <div className="circle-percentage line5">
                <CirclePercentage className="circle-percentage_circle" percent="75" strokeWidth="2" trailColor="#D9D9D9" strokeColor="#FCCA3F" />
                <img className="circle-percentage_svg circle-percentage_svg_xs" src={firebase} alt="firebase-svg"/>
                <p className="circle-percentage_text">75%</p>
            </div>
        </div>
    )
}

export default Skill;
