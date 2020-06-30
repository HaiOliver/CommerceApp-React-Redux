import React from 'react';

// need connect -> use dispatch
import {connect} from 'react-redux';
// need clearItem -> remove items from carts

import {clearItemFromCart,addItem, removeItem} from "../../redux/cart/cart.actions";



import './check-out.styles.scss'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, quantity, imageUrl,price} = cartItem
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="tetst"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=> removeItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=> addItem(cartItem) }>	&#10095;</div>
            </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>{
            console.log("clearItem: ",clearItem)
            clearItem(cartItem)
            console.log("clearItem(cartItem): ", clearItem(cartItem) )}}>&#10006;</div>

    </div>
)}

const mapDispatchToProps= dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})



export default connect(null, mapDispatchToProps)(CheckoutItem);