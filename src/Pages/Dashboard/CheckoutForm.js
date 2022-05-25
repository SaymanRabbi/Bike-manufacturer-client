import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
const CheckoutForm = ({ payment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");
  const [txid, setTxId] = useState('')
  console.log(txid)
    const {productPrice,email,name,_id} = payment
    useEffect(() => {
        fetch('https://assignment12bike.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Barer ${localStorage.getItem('token')}`
            },
            body:JSON.stringify({price:productPrice})
        }).then(res => res.json()).then(data => {
            if (data.clientSecret) {
                setClientSecret(data.clientSecret)
            }
            console.log(data)
        })
    },[productPrice])
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);
    
    if (card == null) {
      return;
    }
    
    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    setError(error?.message || '')
    setSuccess('')
    //confirm card payment
    const { paymentIntent, error: intenterror } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email
          },
        },
      },
    );
    if (intenterror) {
      setError(intenterror?.message)
      setSuccess('')
    }
    else {
      setError('')
      setSuccess('Your Payment is Complited')
      setTxId(paymentIntent?.id)
        //payment information
        const payment = {
          appointment: _id,
          tnxid:paymentIntent?.id
        }
      fetch(`https://assignment12bike.herokuapp.com/payment/${_id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Barer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(payment)
      }).then(res => res.json()).then(data => {
        if (data.messages) {
          
        }
      })
    };
  }
    return (
        <>
         <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn btn-sm mt-5' disabled={!stripe ||!clientSecret||success}>
        Pay
      </button>
        </form>
     
            {
                error && <p className='text-red-500'><span>{error}</span></p>
            }
            {
                success && <p className='text-secondary'><span>{success}</span></p>
            }
        </>
        
    );
};

export default CheckoutForm;