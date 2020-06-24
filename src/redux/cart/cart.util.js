export  const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd
    )

    if(existingCartItem){
        // increase quantity item if item exist
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: (cartItem.quantity+1) }
            : cartItem
            )
    }else{
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }

}