import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epic';
import rootReducer from './reducer';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = (): Store<any> =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

export default store;
