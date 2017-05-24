import * as types from '../../constants/types';
import { ILoginReducer } from '../../typings/interfaces';

const initialState = {
  isLoggedIn: false,
};

const login = (state = initialState, action): ILoginReducer => {
  const payload = action.payload;
  switch (action.type) {
    case types.loginCompleted:
      console.log(action);
      return {
        auth: payload,
        isLoggedIn: true,
      };

    case types.loginFailed:
      return { isLoggedIn: false, error: payload };

    default:
      return state;
  }
};

export default login;
