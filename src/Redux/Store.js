import { createStore, applyMiddleware, compose } from 'redux';
import Root from './Combine';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Root, composeEnhancers(applyMiddleware()));

export default store;