import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({price}) => {
    // set price on Strive
    const priceForStripe = price * 100;
    //get publish key from dashboard
    const publishableKey = 'pk_test_51GyQSmAylIb4YvR9zLMOBDeUOFqjpHa5VexUB5CxefvImptwoDeyVhtMuCkZa8kE3t32X62k1OLEvorBXm3fnKeg00AkLUySgC';
    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('successful payment'+response.json());
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };
    return(
        <StripeCheckout
            label="Check Out Oliver"
            name ="Commerce App"
            billingAddress
            shippingAddress
            image="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            description={`Oliver, Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now, Oliver"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
  
