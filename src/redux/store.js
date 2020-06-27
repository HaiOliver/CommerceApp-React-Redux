//import createStore, appliMiddleware from library
import {createStore, applyMiddleware} from 'redux'

// import logger from library
import logger from "redux-logger"

// need persistor -> redux-persist -> 1st -> set up root-reducer
import {persistStore} from 'redux-persist';

import rootReducer from './root-reducer';

const middleware = [];

if(process.env.NODE_ENV==='development'){
    middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

 // need persistor to export -> 2nd -> root-reducer
export const persistor = persistStore(store);  


export default {store, persistor};
