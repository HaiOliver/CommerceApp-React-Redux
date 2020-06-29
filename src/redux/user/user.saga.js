// goal -> googleSignInStart && emailSignInStart

// need all(),put() <- saga
import {takeLatest,all,put,call} from "redux-saga/effects";
import UserActionTypes from './user.types';
import {auth, googleProvider, createUserProfileDocument} from '../../fireBase/firebase.utils'
import {SignInSuccess,SignInFailure, signOutFailure,signOutSuccess} from './user.action'
import {getCurrentUser} from '../../fireBase/firebase.utils';
//=============================== START CODING =================================
function* getSnapshotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument,userAuth);
        // get user <- firebase
        const userSnapshot = yield userRef.get();
        
        // set user -> id
        yield put(SignInSuccess({
            id : userSnapshot.id, 
            ...userSnapshot.data()}))
    }catch(error){
        yield put(SignInFailure(error))
    }
}


//============================= signInWithGoogle ==============================
export function* signInWithGoogle(){
    try{
        // Popup Google sign in
        const {user} = yield auth.signInWithPopup(googleProvider);
        // pass func in line 10
        yield getSnapshotFromUserAuth(user)

    }catch(error){
        yield put(SignInFailure(error))
    }

}

export function* onGoogleSignInStart(){
   yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}
// =========================== Email sign in -> deal -> firebase:
export function* signInWithEmail({payload:{email, password}}){
    try{

        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        // pass func in line 10
        yield getSnapshotFromUserAuth(user)
    }catch(error){
        yield put(SignInFailure(error.message))
    }

}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}


// ====================================== check user session=======================

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        // userAuth == false
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    }catch(error){
        yield put(SignInFailure(error))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

//=============================================SIGN out ==============================
export function* signOut(){
    try{
        yield auth.signOut()
        yield put(signOutSuccess())

    }catch(err){
        // put === dispatch
        yield put(signOutFailure(err))
    }
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

//========================================== USER SAGA =====================================
export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onSignOutStart)
    ]
        )
}

