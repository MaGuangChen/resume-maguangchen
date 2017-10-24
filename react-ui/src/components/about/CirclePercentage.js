import React from 'react';
import Circle from 'rc-progress';

import node from '../../images/node.svg';

const CirclePercentage = (props) => {
    
    return (
        <div className="circle-percentage">
           <span><img className="im" src={node} alt="node" /></span>
           <span>80%</span>
           <Circle
             className="circle-percentage_percent"
             percent="80" 
             strokeWidth="3" 
             strokeColor="#D3D3D3" 
            />
            <p>Node Js</p>
        </div>
    );
}

export default CirclePercentage;