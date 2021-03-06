import React from 'react';
import {  useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageorderRow from './ManageorderRow';

const ManagOrders = () => {
    const { data:orderdata,isLoading,refetch} = useQuery('orderdata',() => fetch('https://assignment12bike.herokuapp.com/orderdata', {
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
        <div className="overflow-x-auto">
     <table className="table w-full">
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
                        orderdata.map((user,index)=><ManageorderRow refetch={refetch} index={index}  key={user._id} user={user}></ManageorderRow>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default ManagOrders;