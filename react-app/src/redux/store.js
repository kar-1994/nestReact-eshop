import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from "./reducer";

const rootReducer = combineReducers({
    user: reducer
  });
  
  const configureStores = () => {
    return createStore(
      rootReducer,
    //   compose(applyMiddleware(thunk))
    );
  };
  
  export default configureStores;