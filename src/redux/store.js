//import createStore, appliMiddleware from library
import {createStore, applyMiddleware} from 'redux'

// import logger from library
import logger from "redux-logger"

import rootReducer from './root-reducer';

const middleware = [logger];

const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;
