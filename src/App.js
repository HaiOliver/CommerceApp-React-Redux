import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';

import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument} from './fireBase/firebase.utils';

// take setCurrentUse -> update currentUser state 
import {setCurrentUser} from './redux/user/user.action';
// need connect() from redux
import {connect} from 'react-redux';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  // User sign in will call that fuction
  componentDidMount(){
    const {setCurrentUser} = this.props;
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          // get SnapShot object back from firebase
          userRef.onSnapshot(snapShot => {
              
              // console.log("snapShot object: ",snapShot)
              // console.log("snapShot.data() object: ",snapShot.data())
              // call setCurrentUser from -> mapDispatchToProps
              setCurrentUser({
             
                  id: snapShot.id,
                  ...snapShot.data()
               
              }
              
              // in case setState havenot responded it back because of async function
              // ,()=>{
              //   console.log("current user check, line 43, App.js: ", this.state.currentUser)
              // }
              )
             
          })
   
      }else{
        setCurrentUser({
           userAuth
        })
      } 
      
    })
  }

  // Unsubcribe auth

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        {/* put header out switch => header display in all pages */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
       
      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
