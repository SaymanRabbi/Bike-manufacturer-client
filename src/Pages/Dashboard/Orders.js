import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Order from './Order';

const Orders = () => {
    const [user]=useAuthState(auth)
    const { data: orders,isLoading,refetch} = useQuery('orders', () => fetch(`https://assignment12bike.herokuapp.com/userdata?useremail=${user?.email}`, {
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
                orders.length>0?<div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quentity</th>
                      <th className='text-center'>Action</th>
                    </tr>
                  </thead>
                        <tbody>
                            {
                                orders.map((order,index)=> <Order refetch={refetch} index={index} order={order} key={order._id}></Order>)
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