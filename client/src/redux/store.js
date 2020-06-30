import {fetchCollectionsStart} from './shop/shop.sagas'
//import createStore, appliMiddleware from library
import {createStore, applyMiddleware} from 'redux'

// connect root.saga
import rootSaga from './root-saga';

// import logger from library
import logger from "redux-logger"

// need persistor -> redux-persist -> 1st -> set up root-reducer
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';

// thunk <- redux-thunk -> middleware -> remove thunk -> sagas instead
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';



// put thunk -> middleware -> inorge ob, care function, focus on dispatch
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// run individual saga
sagaMiddleware.run(rootSaga)


 // need persistor to export -> 2nd -> root-reducer
export const persistor = persistStore(store);  


export default {store, persistor};
