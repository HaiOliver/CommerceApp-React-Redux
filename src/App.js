import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument} from './fireBase/firebase.utils';
class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      currentUser: null
    }


  }

  unsubscribeFromAuth = null;
  


  // User sign in will call that fuction
  componentDidMount(){
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          // get SnapShot object back from firebase
          userRef.onSnapshot(snapShot => {
              
              // console.log("snapShot object: ",snapShot)
              // console.log("snapShot.data() object: ",snapShot.data())
              this.setState({
                currentUser:{
                  id: snapShot.id,
                  ...snapShot.data()

                }
              }
              
              // in case setState havenot responded it back because of async function
              // ,()=>{
              //   console.log("current user check, line 43, App.js: ", this.state.currentUser)
              // }
              )
              // console.log("Oliver, user will be", this.state)
          })
   
      }else{
        this.setState({
          currentUser : userAuth
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
       
      </div>
    );
  }
  
}

export default App;
