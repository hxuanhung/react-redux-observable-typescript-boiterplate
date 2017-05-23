import * as React from 'react';

export interface IProps {
  onLogin: any;
}

export class GithubLogin extends React.Component<IProps, any> {
  constructor(props?: IProps, context?: any) {
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

