import { Observable } from 'rxjs/Observable';
import * as types from '../../constants/types';
import { login as loginService } from './login.service';
const loginEpic = (action$) =>
  action$
    .ofType('LOGIN')
    .switchMap(() => {
      return Observable.fromPromise(loginService())
        .map((result) => {
          return Observable.of({
            payload: result,
            type: types.loginCompleted,
          });
        })
        .catch((error) => {
          return Observable.of({
            payload: error,
            type: types.loginFailed,
          });
        });
    });

export default loginEpic;
