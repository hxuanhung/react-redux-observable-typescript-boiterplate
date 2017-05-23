import { createAction } from 'redux-actions';
import * as types from '../../constants/types';

export const login = createAction<any>(types.login);
export const loginCompleted = createAction<any>(types.loginCompleted);
export const loginFailed = createAction<any>(types.loginFailed);
