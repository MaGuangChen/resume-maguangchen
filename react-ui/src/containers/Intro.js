import React from 'react';
import blueCode from '../images/blue-code.png';

const Intro = () => {
    const paperPlane = {
      position: 'relative',
      left: '0.2rem',
    }
    return (
      <div>
        <header className="front">
          <div className="front_logo">
            <h1>Hi, my name is Paul Ma</h1>
            <p>你好,我叫馬廣辰，我正在尋找f2e的工作</p>
            <p>此履歷專案使用以下技術:<br/>
             react、router、redux、graphQL、webpack、express、mongoose</p>
            <br/>
            <a href="/" className="main-button">與我聯絡<i style={paperPlane} className="fa fa-paper-plane-o" aria-hidden="true"></i></a>
            <a className="sub-button">或是繼續看履歷</a>
            <div className="scroll-down"><i className="fa fa-angle-down" aria-hidden="true"></i></div>
          </div>
        </header>
      </div>
    )
  }
  
  export default Intro;