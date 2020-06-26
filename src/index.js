import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// import store from './redux/store'
//======================================Persist part -> store data in storage=========================
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

//=======================================================================

// ==========================initialize react router===============
import {BrowserRouter} from 'react-router-dom';
// ====================set up Redux==============================
import {Provider} from 'react-redux';

// ============================= CODE HERE ================================

ReactDOM.render(
  // PUT PROVIDER-REDUX WRAP AROUND ENTIRE APP
    // add store to config redux, fully access userReducer
    <Provider store={store}>
      <BrowserRouter>
       {/* store in local -> need PersistGate wrap around */}
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
      
      </BrowserRouter>
    </Provider>
    
   ,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
