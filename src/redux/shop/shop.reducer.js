
import ShopActionTypes from './shop.types'
const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        // fetching start
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching:true
            }
        // fetching success
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching:false,
                collections:action.payload
            }
        //fetching failure
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching:false,
                errorMessage: action.payload
            }
        
        default:
            return state;
    }

}

export default shopReducer;