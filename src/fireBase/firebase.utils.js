import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAv6SncbsVRqiKSM0B9oMUlZjICFtpGAn0",
  authDomain: "commerce-react.firebaseapp.com",
  databaseURL: "https://commerce-react.firebaseio.com",
  projectId: "commerce-react",
  storageBucket: "commerce-react.appspot.com",
  messagingSenderId: "418521902308",
  appId: "1:418521902308:web:49ca336217f719b20a90f1",
  measurementId: "G-QMDLKRN4PC"
}

firebase.initializeApp(config);

// Create UserRef to store user in firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // create snapshot
  const snapShot = await userRef.get();

  // console.log("snapShot in firebase.js: ",snapShot)

  if( !snapShot.exists){
    // destructor userAuth
     const {displayName, email} = userAuth;
     //store date
     const createAt =  new Date();
    // add user into firebase
     try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
     }catch(e){
        console.log(" error in store user in firebase, firebase.util.js -> line 41 ",e.message)
     }

     

  }
  // return user to use for other goal 
  return userRef;
}


//   export to use
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({prompt: 'select-account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

//   export whold library
export default firebase;