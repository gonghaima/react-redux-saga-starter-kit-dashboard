import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import rootSaga from '../sagas/index';
import rootReducer from '../reducers';

import middleware, { sagaMiddleware } from './middleware';

const reducer = combineReducers({ ...rootReducer });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* istanbul ignore next */
const configStore = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);

  return {
    store
  };
};

const { store } = configStore();

global.store = store;

export { store };
