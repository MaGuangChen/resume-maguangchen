import React from 'react';

import Percentage from './Percentage';

import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import scss from '../../images/scss.svg';
import graphQL from '../../images/graphQL.svg';
import webpack from '../../images/webpack.svg';
import node from '../../images/node.svg';
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
              imgSize="m"
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
            <Percentage 
              title="mLab"
              img={mongoDB}
              alt="mongoDB-svg"
              percentage={70}
              backgroundColor="#75AD5B"
              imgSize="lg"
            />
            <Percentage 
              title="Firebase"
              img={firebase}
              alt="firebase-svg"
              percentage={70}
              backgroundColor="#FCCA3F"
              imgSize="s"
            />
        </div>
    )
}

export default Skill;
