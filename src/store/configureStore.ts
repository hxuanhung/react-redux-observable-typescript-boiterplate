import { createStore, applyMiddleware, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import rootEpic from './epic';


const epicMiddleware = createEpicMiddleware(rootEpic);

const store = ():Store<any> =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

export default store;
