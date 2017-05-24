import { PropTypes } from 'prop-types';
import * as React from 'react';
import { ILoginProps } from '../../typings/interfaces';
import { GithubLogin } from './GithubLogin';

export class Login extends React.Component<ILoginProps, any> {
  constructor(props?: ILoginProps, context?: any) {
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
