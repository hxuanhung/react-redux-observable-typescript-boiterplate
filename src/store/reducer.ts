import { combineReducers } from 'redux';
import { reducers as loginReducers } from '../components/login';

const rootReducer = combineReducers({
  loginReducers,
});

export default rootReducer;
