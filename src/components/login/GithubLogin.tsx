import * as React from 'react';
import { IGithubLoginProps } from '../../typings/interfaces';

export class GithubLogin extends React.Component<IGithubLoginProps, any> {
  constructor(props?: IGithubLoginProps, context?: any) {
    super(props, context);
  }

  public handleOnClick = () => {
    console.log('Need to login');
    this.props.onLogin();
  }

  public render() {
    return <button onClick={this.handleOnClick}>Github</button>;
  }
}
