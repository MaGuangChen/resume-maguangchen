import React, { Component } from 'react';

import Intro from './containers/Intro';
import About from './containers/About';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <About />
      </div>
    );
  }
}

export default App;
