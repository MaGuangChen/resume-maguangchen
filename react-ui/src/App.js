import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from './actions/actions';

import Intro from './containers/Intro';
import About from './containers/About';
import './styles/App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  // }
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
