import * as React from 'react';
import { PropTypes } from 'prop-types';
import { GithubLogin } from './GithubLogin';

export namespace Login {
  export interface Props {
    login: any;
  }

  export interface State {
    /* empty */
  }
}

export class Login extends React.Component<Login.Props, Login.State> {
  constructor(props?: Login.Props, context?: any) {
    super(props, context);
  }

  handleLogin = () => {
    this.props.login();
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <GithubLogin onLogin={this.handleLogin} />
      </div>
    );
  }
}

