import  UserActionTypes from './user.types'


//set initial state
const INITIAL_STATE = {
    currentUser: null,
    error: null
};



// user reducer: action: payload, type
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case UserActionTypes.SIGN_IN_SUCCESS:
      
            // MUST RETURN DIFFERNET OBJECT => RENDER(), OTHERWISE: SAME OBJECT, DIFERENT PROPS => NOT RENDER()
            return {
                ...state,
                currentUser: action.payload,
                error:null
            }

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser:null,
                error:null
            }
            
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload

            }


        default:
            return state;
    }
};

export default userReducer;
