import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default (initialState = {}) => {
  const middleware = [thunk];

  const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
  return store;
};
