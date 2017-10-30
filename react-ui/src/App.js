import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import Intro from './containers/Intro';
import About from './containers/About';
import Contact from './containers/Contact';
import Portifolio from './containers/Portifolio';
import Login from './components/base/Login';
import NavgationBar from './containers/NavgationBar';

// import fetchUser from './queries/fetchUser';
import fetchUsers from './queries/fetchUsers';

import './styles/App.css';

const App = (props) => {
      const { login, data } = props;
      const currentId = localStorage.getItem('currentUserId');
      console.log(data);
      console.log(currentId);
      console.log(login);
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

// const appWithGraphQL = compose(
  // graphql(fetchUser, { 
  //   options: { 
  //     variables: { id: '59f3964c8449921870b5a1b8' } }
  //   }, { name: "user" } ),
//    graphql(fetchUsers, { name: "users" }),
// )(App);

const appWithGraphQL = graphql(fetchUsers)(App);

export default connect((state) => {
  return { login: state.login }
})(appWithGraphQL);