import { combineReducers } from 'redux';
import { reducers as loginReducers } from '../components/login';

const rootReducer = combineReducers({
  login: loginReducers,
});

export default rootReducer;
