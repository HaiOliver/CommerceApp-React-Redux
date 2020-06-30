import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item.component'

import {withRouter} from 'react-router-dom';

// use connect to display all items in carts
import {connect} from 'react-redux';
// need selectCartItems -> get all items in cart
import {selectCartItems} from '../../redux/cart/cart.selectors';

//make more scalable -> createStructuredSelector
import {createStructuredSelector} from 'reselect';
        
//
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems,history,dispatch}) => {
    
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                
                {
                
                cartItems.length 
                ? cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                : (<span className='empty-message'>Your Cart is empty</span>)
                }
            </div>
            <CustomButton 
                onClick={()=>

                {
                
                history.push('/checkout');
                dispatch(toggleCartHidden());
                
                
                }}>Check Out</CustomButton>
        </div>
)}



const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });

export default withRouter(connect(mapStateToProps)(CartDropdown));
