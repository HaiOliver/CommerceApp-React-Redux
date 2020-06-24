import {createSelector} from 'reselect';

// selectCart need state -> state find cart
const selectCart = state => state.cart;

// selectCartItems will need selectCart
export const selectCartItems = createSelector (
    [selectCart],
    cart => cart.cartItems
);

// selectCartItemsCount will need selectCartItems
export const selectCartItemsCount = createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce((accumulateQuantity, cartItem) =>
    accumulateQuantity + cartItem.quantity  , 0)
) 

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>cartItems.reduce( (accumulateTotal, cartItem) => 
    accumulateTotal + (cartItem.quantity * cartItem.price) , 0)
)