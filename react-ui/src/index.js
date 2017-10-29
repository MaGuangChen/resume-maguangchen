import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { configure } from './store/configureStore';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import User from './containers/MemberCenter';

let store = configure();
let unsubscribe = store.subscribe(() => {
	console.log('current state');
	console.log(store.getState());
});
// unsubscribe()


const client = new ApolloClient({
  dataIdFromObject: o => o.id
});


ReactDOM.render(
  <ApolloProvider store={store} client={client}>
      <ConnectedRouter history={ createHistory() } >
        <div>
	          <Route exact path={process.env.PUBLIC_URL + '/'} component={App}/>
            <Route exact path={process.env.PUBLIC_URL + '/user'} component={User}/>
	      </div>
      </ConnectedRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
