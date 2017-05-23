import * as types from '../../constants/types';

const loginEpic = (action$) =>
  action$.ofType('LOGIN').mapTo({
    type: types.loginCompleted,
  });

export default loginEpic;
