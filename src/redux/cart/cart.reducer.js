import CartActionTypes from './cart.types';
import {addItemToCart,removeItemFromCart} from './cart.util';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        // toggle to display cart
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        
        // Add items into Cart
        case CartActionTypes.ADD_ITEMS:
            return {
                cartItems: addItemToCart(state.cartItems, action.payload )
            };
        // clear single item in cart
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem =>
                     cartItem.id !== action.payload.id)

            };
        // clear all items in cart
        case CartActionTypes.CLEAR_CART:
            return{
                ...state,
                cartItems: []
            };
        // decrease 1 item
        case CartActionTypes.REMOVE_ITEMS:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            };
        
        default:
            return state;

    }

} 

export default cartReducer;