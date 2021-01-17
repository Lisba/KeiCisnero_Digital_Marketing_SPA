import { createStore, combineReducers, compose } from 'redux';
import { reducer as main } from './Main/reducer';
// import thunk from 'redux-thunk';

const reducers = combineReducers({
  main,
});

const enhancers = [];
// enhancers.push(applyMiddleware(...middlewares)); When using a midleware like redux-thunk

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state, action) => reducers(state, action);

const store = createStore(rootReducer, composeEnhancers(...enhancers));

export default store;
