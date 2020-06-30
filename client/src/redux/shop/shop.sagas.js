// need takeEverym, put-> dispatch, call <- saga library
import {takeLatest, put, call, all} from 'redux-saga/effects';
import {fetchCollectionFailure,fetchCollectionSuccess} from './shop.actions'
import ShopActionTypes from './shop.types';
// need firestore
import {firestore,convertCollectionsSnapshotToMap} from '../../fireBase/firebase.utils'

// replace for fetchCollectionsStartAsync, line 23, shop.actions.js
export function* fetchCollectionsAsync(){
    yield console.log('Oliver, line 7, shop.sagas.js called')

    try{
        const collectionRef = firestore.collection('collections');
        // get snapshot <- firebase by get()
        const snapshot = yield collectionRef.get();
        const collectionsMap =  yield call(
            convertCollectionsSnapshotToMap,
            snapshot);
        
        // put == dispatch
        yield put(fetchCollectionSuccess(collectionsMap))
    }catch(error){
        yield put(fetchCollectionFailure(error.message))
    }
    
   
        
     
}

export function* fetchCollectionsStart(){
    // takeLatest instead takeEvery -> takeLastest always choose lastest one 
    yield takeLatest(
        // choose action -> kick off -> start async 
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync

    )
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart
        )])
}