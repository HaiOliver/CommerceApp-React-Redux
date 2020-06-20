import React from 'react';
import ReactDOM from 'react-dom';
// initialize react router
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // PUT PROVIDER-REDUX WRAP AROUND ENTIRE APP
    // add store to config redux, fully access userReducer
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
    
   ,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
