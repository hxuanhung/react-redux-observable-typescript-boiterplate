import * as types from '../../constants/types';

const initialState = {
  isLoggedIn: false,
};
// const actionsMap = {
//   [type](state, action) {
//     console.log('reducer login completed', action);
//     return [
//       {
//         isLogined: true
//       },
//       ...state
//     ];
//   }
// };
const login = (state = initialState, action) => {
  switch (action.type) {
    case types.loginCompleted:
      return { isLoggedIn: true };

    default:
      return state;
  }
};

export default login;
// export default function login(state = initialState, action) {
//   const reduceFn = actionsMap[action.type];
//   if (!reduceFn) return state;
//   return reduceFn(state, action);
// }
