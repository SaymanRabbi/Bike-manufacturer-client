import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const { data:productData,isLoading,refetch} = useQuery('productData',() => fetch('http://localhost:5000/manageproduct', {
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
           <th>Number</th>
           <th>PD Name</th>
           <th>PD Quentity</th>
           <th>Delete</th>
           <th>Update</th>
                           
         </tr>
       </thead>
       <tbody>
         
                       {
                           productData.map((user,index)=><ManageProductRow refetch={refetch} index={index}  key={user._id} user={user}></ManageProductRow>)
         }
         
       </tbody>
     </table>
   </div>
    );
};

export default ManageProducts;