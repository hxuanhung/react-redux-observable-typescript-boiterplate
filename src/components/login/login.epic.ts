import { Observable } from 'rxjs/Observable';
import * as types from '../../constants/types';
import { login as loginService } from './login.service';
const loginEpic = (action$) =>
  action$
    .ofType('LOGIN')
    .switchMap(() => {
      return loginService()
        .then((result) => {
          const token = result.credential.accessToken;
          const user = result.user;
          console.log(`token`, token);
          console.log(`user`, user);
          return {
            payload: result,
            type: types.loginCompleted,
          };
        })
        .catch((error) => {
          console.log(`come here`, error);
          return {
            payload: error,
            type: types.loginFailed,
          };
        });
    });

export default loginEpic;
