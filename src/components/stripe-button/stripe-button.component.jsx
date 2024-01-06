import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51MQ41LSDd4vahOov9I86SRtzhLu8Jqcn4kVpMHEgKGMxVOlAGJGD5tPYndSZotcAdRGLBPoftOjcZYjynMwna1L600h4JFHi4A';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://img.icons8.com/fluency/512/ok.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;