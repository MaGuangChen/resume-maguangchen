import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

import Intro from './containers/Intro';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Intro />
      </div>
    );
  }
}

export default App;
