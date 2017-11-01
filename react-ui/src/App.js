import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import Intro from './containers/Intro';
import About from './containers/About';
import Contact from './containers/Contact';
import Portifolio from './containers/Portifolio';
import Login from './components/base/Login';
import NavgationBar from './containers/NavgationBar';
import LightBox from './components/base/LightBox';
import MessageBox from './components/base/MessageBox';
import fetchUsers from './queries/fetchUsers';
import * as actions from './actions/actions'

import './styles/App.css';

const App = (props) => {
      const { login, data, dispatch, 
        showLogoutSussced, showLoginSussced } = props;
      const currentId = localStorage.getItem('currentUserId');

      const closeLogoutSusscedLightBox = () => {
        dispatch(actions.showLogoutSussced(false));
      }
      const closeLoginSusscedLightBox = () => {
        dispatch(actions.showLoginSussced(false));
      }

      return (
        <div className="App">
          { showLogoutSussced && 
            <LightBox 
            title="您已經登出" 
            text="期待您的下次使用"
            handleClose={closeLogoutSusscedLightBox} 
            />
          }
          { showLoginSussced && 
            <LightBox
            title="登入成功" 
            text="歡迎使用"
            handleClose={closeLoginSusscedLightBox} 
            />
          }
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
          <MessageBox />
        </div>
      );      
}

const appWithGraphQL = graphql(fetchUsers)(App);

export default connect((state) => {
  return { 
    login: state.login,
    showLogoutSussced: state.menuStatus.showLogoutSussced,
    showLoginSussced: state.menuStatus.showLoginSussced,
  }
})(appWithGraphQL);
