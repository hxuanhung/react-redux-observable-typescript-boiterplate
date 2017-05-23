import { PropTypes } from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import { actions } from './components/login';
import { Login } from './components/login';

export interface IProps extends RouteComponentProps<void> {
  loginActions?: any;
}

@connect(
  null,
  (dispatch) => ({ loginActions: bindActionCreators(actions as any, dispatch) }),
)
class App extends React.Component<IProps, any> {

  public render() {
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
