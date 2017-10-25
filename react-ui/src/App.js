import React from 'react';

import Intro from './containers/Intro';
import About from './containers/About';
import Contact from './containers/Contact';
import Portifolio from './containers/Portifolio';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Intro />
      <About />
      <Portifolio />
      <Contact />
    </div>
  );
}

export default App;
