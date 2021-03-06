import React from 'react';

import './check-out.styles.scss';
import CheckoutItem from "../../components/check-out/check-out.component"

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

// need import connect()
import {connect} from 'react-redux';

//need createStructureSelector
import {createStructuredSelector} from 'reselect';

// need cartSelecTor
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span > Product</span>
            </div>
            <div className="header-block">
                <span > Description</span>
            </div>
            <div className="header-block">
                <span > Quantity</span>
            </div>
            <div className="header-block">
                <span > Price</span>
            </div>
            <div className="header-block">
                <span > Remove</span>
            </div>
        </div>

        {/* render all items in cart */}
            {
                cartItems.map(cartItem => 
                <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
                )
            }

        {/* show total $ */}
        <span className='total'>TOTAL: ${total} </span>
        <div className='test-warning'>
            Please test with card: 
            <br/>
            4242424242424242 - EXP: 02/23 - CVV: 234
            <br/>
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

//first argument
const mapStateToProps = createStructuredSelector (
    {
        cartItems: selectCartItems,
        total: selectCartTotal
    }
)


export default connect(mapStateToProps,null)(CheckoutPage);