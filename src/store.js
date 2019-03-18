import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';


const logMiddleware = (store) => (dispatch) => (next) => {
 // console.log(store.getState());
  return dispatch(next);
};

const stringMiddleware = () => (next) => (action) => {

  if (typeof action === 'string') {
    return next({
      type: action
    })
  }

  return next(action);
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));


const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAY'
  }), timeout);
};

store.dispatch(delayedActionCreator(1000));

export default store;