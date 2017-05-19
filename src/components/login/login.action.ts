import { createAction } from 'redux-actions';
// export function login() {
//   return { type: 'LOGIN' };
// }

// export function loginCompleted() {
//   return { type: 'LOGIN_COMPLETED' };
// }

// export function loginFailed() {
//   return { type: 'LOGIN_FAILED' };
// }

export const login = createAction<any>(`LOGIN`);
export const loginCompleted = createAction<any>(`LOGIN_COMPLETED`);
