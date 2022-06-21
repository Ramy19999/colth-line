import React from "react";
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({price}) => {
    const PriceForStripe = price * 100 ;
    const PublishableKey ="pk_test_51LCrPkCsEB0zNBGwwbB6A4PXvQQ44DVEWa5pulJhHcm6jnyhN4wZ0V1E2OSrGdl01H9nwi5daQm9sNCnhAlSoNbh00AZXDjV4n";
    const onToken= token =>{
        console.log(token);
        alert("you have been robed successfully");
    }
    return (

    <StripeCheckout
    label = 'pay now'
    name = 'crow cloth line'
    billingAddress 
    shippingAddress
    image = 'https://svgshare.com/i/CUz.svg'
    description ={`your total is $${price}`}
    amount = {PriceForStripe}
    panelLabel = ' pay now'
    token  = {onToken}
    stripeKey = {PublishableKey}
    />
);
};

export default StripeCheckoutButton ;
