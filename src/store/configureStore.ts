import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epic';
import rootReducer from './reducer';

const epicMiddleware = createEpicMiddleware(rootEpic);

// Ref: https://redux-observable.js.org/docs/recipes/HotModuleReplacement.html
if (module.hot) {
  module.hot.accept('./epic', () => {
    const nextEpic = require('./epic');
    epicMiddleware.replaceEpic(nextEpic);
  });
}

const configureStore = (): Store<any> => {

  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });

    return store;
  }
};

export default configureStore;
