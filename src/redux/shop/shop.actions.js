import ShopActionTypes from './shop.types';
// need firestore
import {firestore,convertCollectionsSnapshotToMap} from '../../fireBase/firebase.utils'

// start
export const fetchCollectionsStart = () => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
   
}) 

//success
export const fetchCollectionSuccess = collectionsMap => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

//error
export const fetchCollectionFailure = errorMessage => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        //set isFetching = true -> call line 55 
        dispatch(fetchCollectionsStart())

        // use promise handle firebase
        collectionRef.get().then((snapshot)=> {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
             // called line 18 in shop.reducer.js
            dispatch(fetchCollectionSuccess(collectionsMap))      
             // set loading-> false <- fetch firebase
            //  this.setState({loading: false});
         }).catch(error => dispatch(fetchCollectionFailure(error.message)))
            
    }
}

