import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route, Redirect} from 'react-router-dom';
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
               
              })
             
          })
   
      }else{
        setCurrentUser(
           userAuth
        )
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
          <Route exact path="/signin" render={ ()=>
            this.props.currentUser 
              ? (<Redirect to="/"/>) 
              : (<SignInAndSignUpPage/>)
          }/>
        </Switch>
       
      </div>
    );
  }
  
}

//first argument of connect() -> set currentUser
const mapStateToProps = ({user}) =>
  
  {
    console.log("App.js line 87, currentUser after mapStateToProps called: ",{currentUser: user.currentUser})
    return  {currentUser: user.currentUser}
}

//second argument of connect() -> update current user
const mapDispatchToProps = (dispatch) => {
  console.log("App.js line 93, dispatch(setCurrentUser): ",{
    setCurrentUser : user => dispatch(setCurrentUser(user))})
  return {
  setCurrentUser : user => dispatch(setCurrentUser(user))}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
