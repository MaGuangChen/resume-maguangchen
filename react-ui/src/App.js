import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';

import Intro from './containers/Intro';
import About from './containers/About';
import Contact from './containers/Contact';
import Portifolio from './containers/Portifolio';
import Login from './components/base/Login';
import NavgationBar from './containers/NavgationBar';

import fetchUsers from './queries/fetchUsers';
import * as actions from './actions/actions';

import './styles/App.css';


const App = (props) => {
  const { dispatch, login, data } = props;
  const currentId = localStorage.getItem('currentUserId');

  if(currentId) {
    dispatch(actions.loginStatus(true));
    dispatch(actions.setCurrentUser(currentId));
  }
  return (
    <div className="App">
      <NavgationBar login={login}/>
      { login.showLogin && 
      <div>
        <div className="login-background">
          Login
        </div>
        <Login login={login} data={data}/>
      </div> }
      <Intro />
      <About />
      <Portifolio />
      { currentId === null && !login.login && <Contact /> }
    </div>
  );
}

const appWithGraphQL = compose(
  graphql(fetchUsers)
)(App);


export default connect((state) => {
  return { login: state.login }
})(appWithGraphQL);