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

// add data -> all items -> firebase

export const addCollectionAndDocument = async (collectionKey, ObjToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log("line 58, firebase.util.js, collectionRef: ", collectionRef)
  // use batch -> wrap small requests into one big request -> firebase
  const batch = firestore.batch()
  ObjToAdd.forEach(obj => {
    // allocate -> 5 spot -> unique key -> firebase 
    const newDocRef = collectionRef.doc();
    // console.log("line 63, firebase.util.js, collectionRef.doc(): ", newDocRef)
    // put each obj into 5 spot -> already created in line 63
    batch.set(newDocRef,obj)
  })

  return await batch.commit()

}

// convert sanpshop -> array data items
export const convertCollectionsSnapshotToMap = (collections) =>  {
  const transformCollection = collections.docs.map(doc =>{
    // need data() -> grab data from firebase  
    const {title, items} = doc.data();
    return {
      routeName:encodeURI(title.toLowerCase())
      ,id:doc.id,
      title,
      items
    }
  })
  // console.log("line 85, firebase.util: transformCollection:", transformCollection)
  // convert array collections -> object collection
  return transformCollection.reduce((accumulator, collection)=>{
    // object[key] = value 
     accumulator[collection.title.toLowerCase()] = collection
     
     return accumulator
  },{})
}


//   export to use
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({prompt: 'select-account'});

// check user session exist or not
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unSubcribe = auth.onAuthStateChanged(userAuth =>{
        unSubcribe();
        
        resolve(userAuth);
      },reject
      )
  })
}


export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

//   export whold library
export default firebase;