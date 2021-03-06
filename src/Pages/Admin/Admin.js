import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import AdminRow from './AdminRow';

const Admin = () => {
    const { data:users,isLoading,refetch } = useQuery('alluser', () => fetch('https://assignment12bike.herokuapp.com/getalluser', {
        method: "GET",
        headers: {
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
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
                    {
                        users.map((user,index)=><AdminRow refetch={refetch} index={index}  key={user._id} user={user}></AdminRow>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default Admin;