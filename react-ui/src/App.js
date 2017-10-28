import React from 'react';

import Intro from './containers/Intro';
import About from './containers/About';
import Contact from './containers/Contact';
import Portifolio from './containers/Portifolio';
import './styles/App.css';

const App = (props) => {
  const currentId = localStorage.getItem('currentUserId');
  console.log(currentId);
  return (
    <div className="App">
      <Intro />
      <About />
      <Portifolio />
      { currentId === null && <Contact /> }
    </div>
  );
}

export default App;