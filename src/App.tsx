import * as React from 'react';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { actions } from './components/login';
import { Login } from './components/login';
import { RouteComponentProps } from 'react-router';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    loginActions?: any;
  }

  export interface State {
    /* empty */
  }
}
@connect(
  null,
  dispatch => ({
    loginActions: bindActionCreators(actions as any, dispatch)
  })
)
class App extends React.Component<App.Props, App.State> {
  render() {
    const { loginActions } = this.props;
    return (
      <div className="App">
        <Login login={loginActions.login} />
        <div className="App-header">
          <h2>Welcomet</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



export default App;
