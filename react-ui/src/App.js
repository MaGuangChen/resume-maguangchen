import React from 'react';

import Intro from './containers/Intro';
import About from './containers/About';
import Contact from './containers/Contact';
import Portifolio from './containers/Portifolio';
import Login from './components/base/Login';
import NavgationBar from './containers/NavgationBar';

import './styles/App.css';


const App = (props) => {
  const currentId = localStorage.getItem('currentUserId');

  return (
    <div className="App">
      <NavgationBar />
      {/* <div>
        <div className="login-background">
          Login
        </div>
        <Login />
      </div> */}
      <Intro />
      <About />
      <Portifolio />
      { currentId === null && <Contact /> }
    </div>
  );
}

export default App;