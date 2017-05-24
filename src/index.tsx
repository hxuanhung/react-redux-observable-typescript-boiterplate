import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import 'rxjs';
import App from './App';
import store from './store/configureStore';
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store()}>
    <Router history={history}>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
