import { RouteComponentProps } from 'react-router';

export interface IAppProps extends RouteComponentProps<void> {
  loginActions?: any;
}

export interface IGithubLoginProps {
  onLogin: any;
}

export interface ILoginProps {
  login: any;
}
