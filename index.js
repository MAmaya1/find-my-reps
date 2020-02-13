import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Import App

import App from './App';

// Redux Store

const store = createStore(rootReducer, applyMiddleware(thunk));

