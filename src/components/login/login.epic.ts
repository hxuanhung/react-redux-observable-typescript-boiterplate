const loginEpic = action$ =>
  action$.ofType('LOGIN').mapTo({
    type: 'LOGIN_COMPLETED'
  });

export default loginEpic;
