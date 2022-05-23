import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Order from './Order';

const Orders = () => {
    const [user]=useAuthState(auth)
    const { data: orders,isLoading} = useQuery('orders', () => fetch(`http://localhost:5000/userdata?useremail=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Barer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            {
                orders.length>0?<div class="overflow-x-auto">
                <table class="table w-full">
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                        <tbody>
                            {
                                orders.map((order,index)=> <Order index={index} order={order} key={order._id}></Order>)
                            }
                  </tbody>
                </table>
                </div> : <div className='text-center'>
                        <p className='font-bold text-2xl text-red-500'>Please Buy Some Product ☺☺☺</p>
                        <Link to='/'><button className='btn btn-primary mt-5'> Buy </button></Link>
                    </div>
            }
        
            </>
    );
};

export default Orders;