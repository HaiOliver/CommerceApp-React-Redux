//set initial state
const INITIAL_STATE = {
	currentUser: null
};

// user reducer: action: payload, type
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case 'SET_CURRENT_USER':
            // MUST RETURN DIFFERNET OBJECT => RENDER(), OTHERWISE: SAME OBJECT, DIFERENT PROPS => NOT RENDER()

            return {
                ...state,
                currentUser: action.payload
            }


        default:
            return state;
    }
};

export default userReducer;
