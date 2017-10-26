import React from 'react';
import { graphql } from 'react-apollo';
import fetchUsers from './queries/fetchUsers';

import Intro from './containers/Intro';
import About from './containers/About';
import Contact from './containers/Contact';
import Portifolio from './containers/Portifolio';
import './styles/App.css';

const App = (props) => {
  return (
    <div className="App">
      <Intro />
      <About />
      <Portifolio />
      <Contact />
    </div>
  );
}

export default graphql(fetchUsers)(App);