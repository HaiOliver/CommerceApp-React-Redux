import React from 'react';

// need connect -> use dispatch
import {connect} from 'react-redux';
// need clearItem -> remove items from carts

import {clearItemFromCart} from "../../redux/cart/cart.actions";



import './check-out.styles.scss'

const CheckoutItem = ({cartItem, clearItem}) => {
    const {name, quantity, imageUrl,price} = cartItem
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="tetst"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>{
            console.log("clearItem: ",clearItem)
            clearItem(cartItem)
            console.log("clearItem(cartItem): ", clearItem(cartItem) )}}>&#10006;</div>

    </div>
)}

const mapDispatchToProps= dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})



export default connect(null, mapDispatchToProps)(CheckoutItem);