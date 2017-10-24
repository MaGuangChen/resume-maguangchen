import React from 'react';

import Percentage from './Percentage';
import CirclePercentage from './CirclePercentage';

import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import scss from '../../images/scss.svg';
import graphQL from '../../images/graphQL.svg';
import webpack from '../../images/webpack.svg';
import node from '../../images/node.svg';
import expressImg from '../../images/express.svg';
import mongoDB from '../../images/mongoDB.svg';
import firebase from '../../images/firebase.svg';


const Skill = () => {

    return (
        <div className="skill">
            <p>相對熟悉程度: </p>
            <Percentage 
              title="React"
              img={react}
              alt="react-svg"
              percentage={95}
              backgroundColor="#61DAFB"
              imgSize="lg"
            />
            <Percentage 
              title="Redux"
              img={redux}
              alt="react-svg"
              percentage={85}
              backgroundColor="#764ABC"
              imgSize="m"
            />
            <Percentage 
              title="SCSS"
              img={scss}
              alt="scss-svg"
              percentage={90}
              backgroundColor="#CD6799"
              imgSize="m"
            />
            <Percentage 
              title="GraphQL"
              img={graphQL}
              alt="graphql-svg"
              percentage={85}
              backgroundColor="#E535AB"
              imgSize="s"
            />
            <Percentage 
              title="Webpack"
              img={webpack}
              alt="webpack-svg"
              percentage={80}
              backgroundColor="#6F95DB"
              imgSize="s"
            />
            <Percentage 
              title="Node"
              img={node}
              alt="node-svg"
              percentage={70}
              backgroundColor="#8CC84B"
              imgSize="s"
            />
        </div>
    )
}

export default Skill;


{/* <div className="percentage">
<div className="percentage_title">
    <p>React 95%</p>
    <img className="percentage_title_img_lg" src={react} alt="react-svg" />
</div>
<div className="percentage_bar">
    <div className="percentage_bar_1"></div>
</div>
<div className="percentage_title">
    <p>Redux 85%</p>
    <img className="percentage_title_img_m" src={redux} alt="redux-svg" />
</div>
<div className="percentage_bar">
    <div className="percentage_bar_2"></div>
</div>
<div className="percentage_title">
    <p>SCSS 90%</p>
    <img className="percentage_title_img_m" src={scss} alt="scss-svg" />
</div>
<div className="percentage_bar">
    <div className="percentage_bar_3"></div>
</div>
<div className="percentage_title">
    <p>graphQL 85%</p>
    <img className="percentage_title_img_m" src={graphQL} alt="graphQL-svg" />
</div>
<div className="percentage_bar">
    <div className="percentage_bar_4"></div>
</div>
</div> */}