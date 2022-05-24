import React from 'react';
import {  useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageorderRow from './ManageorderRow';

const ManagOrders = () => {
    const { data:orderdata,isLoading} = useQuery('orderdata',() => fetch('http://localhost:5000/orderdata', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Barer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
     <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Order Quentity</th>
        <th>Price</th>
        <th>Status</th>
                        
      </tr>
    </thead>
    <tbody>
      
                    {
                        orderdata.map((user,index)=><ManageorderRow index={index}  key={user._id} user={user}></ManageorderRow>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default ManagOrders;