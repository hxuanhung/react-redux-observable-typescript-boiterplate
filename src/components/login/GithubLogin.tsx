import * as React from 'react';

export namespace GithubLogin {
  export interface Props {
    onLogin: any;
  }

  export interface State {
    /* empty */
  }
}

export class GithubLogin extends React.Component<GithubLogin.Props, GithubLogin.State> {
  constructor(props?: GithubLogin.Props, context?: any) {
    super(props, context);
  }

  handleOnClick = () => {
    console.log('Need to login');
    this.props.onLogin();
  };

  render() {
    return <button onClick={this.handleOnClick}>Github</button>;
  }
}

