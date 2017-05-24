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

export interface IAuth {
  additionalUserInfo: any;
  credential: any;
  operationType: any;
  user: any;
}
export interface ILoginReducer {
  isLoggedIn: boolean;
  auth?: IAuth;
  error?: any;
}
