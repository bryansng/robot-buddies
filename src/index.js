import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './containers/App';
import 'tachyons';
import './index.css';
import { searchRobots, requestRobots } from './reducers';
import ErrorBoundary from './components/ErrorBoundary';

const logger = createLogger();

const rootReducers = combineReducers({ searchRobots, requestRobots });

// both logger and ThunkMiddleware are middlewares.
// logger logs and shows us what enters the reducers in dev tools.
// thunk is needed for async.
const store = createStore(rootReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  // instead of doing "store={store} for those that will look at the states"
  // we pass it to provider, it will pass it to all its children.
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
  , document.getElementById('root')
);