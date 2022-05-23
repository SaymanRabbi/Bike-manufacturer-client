import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L18RMLQwFCfbG4umFA2Cu1NjkMVlkeDCGz41ovrJxahhMu72OBOiVyFUDyQKzLkPD7IUi4tMMvUFaXUbh8XB5dX00yu3DrhGH');
const Payment = () => {
    const { id } = useParams()
    const { data: payment, isLoading } = useQuery(['payment', id], () => fetch(`http://localhost:5000/payment/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Barer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    
    const {productName,productPrice,email,phone} = payment
    return (
        <div>
        <div className="card w-2/4 bg-base-100 max-w-md shadow-xl my-12">
        <div className="card-body">
                              <h2 className="card-title text-secondary">Pay For{productName}</h2>
                          <p>Email <span className='text-orange-700'>{email}</span> Phone <span className='text-orange-700'>{phone}</span></p>
                          <p className='text-orange-500 font-bold'>Please Pay ${productPrice}</p>
        </div>
      </div>
          <div className="card flex-shrink-0 w-2/4 max-w-md shadow-2xl bg-base-100">
                      <div className="card-body">
                      <Elements stripe={stripePromise}>
                    <CheckoutForm  payment={payment}/>
          </Elements>
            </div>
                  </div>
                  </div>
        
    );
};

export default Payment;