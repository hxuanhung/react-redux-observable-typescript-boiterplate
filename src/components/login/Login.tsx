import { PropTypes } from 'prop-types';
import * as React from 'react';
import { GithubLogin } from './GithubLogin';

export interface IProps {
  login: any;
}

export class Login extends React.Component<IProps, any> {
  constructor(props?: IProps, context?: any) {
    super(props, context);
  }

  public handleLogin = () => {
    this.props.login();
  }

  public render() {
    return (
      <div>
        <h1>Login</h1>
        <GithubLogin onLogin={this.handleLogin} />
      </div>
    );
  }
}
