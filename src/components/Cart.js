import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function Cart({ cartItems, removeFromCart }) {
  const [isPaymentComplete, setPaymentComplete] = useState(false);

  const handlePaymentComplete = () => {
    setPaymentComplete(true);
    // Logic to handle payment completion (e.g., update order status)
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <div>
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Total: $ {cartItems.reduce((total, item) => total + item.price, 0)}</strong>
      </div>
      {!isPaymentComplete && (
        <PayPalScriptProvider options={{ 'client-id': 'YOUR_PAYPAL_CLIENT_ID' }}>
          <PayPalButtons
            style={{ layout: 'horizontal' }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: cartItems.reduce((total, item) => total + item.price, 0).toFixed(2),
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(function(details) {
                handlePaymentComplete();
                // Logic to handle successful payment capture
              });
            }}
          />
        </PayPalScriptProvider>
      )}
      {isPaymentComplete && <div>Payment Completed! Thank you.</div>}
    </div>
  );
}

export default Cart;

// In the Cart component, we use the PayPalScriptProvider component to load the PayPal JavaScript SDK. We pass the options

// object with the client-id property set to your PayPal client ID. Replace YOUR_PAYPAL_CLIENT_ID with your actual client ID.

// We use the PayPalButtons component to render the PayPal button. We pass the createOrder and onApprove props to handle the order creation and payment approval logic.

// The createOrder prop is a function that returns a promise. The function receives the data and actions parameters. The data parameter contains the order details, and the actions parameter contains the order.create method to create the order.

// The onApprove prop is a function that returns a promise. The function receives the data and actions parameters. The data parameter contains the order details, and the actions parameter contains the order.capture method to capture the payment.

// When the payment is approved, the onApprove function captures the payment and calls the handlePaymentComplete function to handle the payment completion logic.

// You can add more logic to handle the payment completion, such as updating the order status or redirecting the user to a confirmation page.

// Note: The PayPalScriptProvider and PayPalButtons components are part of the @paypal/react-paypal-js package. Make sure to install the package before using these components.

// Run the following command to install the package:

// npm install @paypal/react-paypal-js

