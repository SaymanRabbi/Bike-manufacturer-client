import React from 'react';

const ManageorderRow = ({ user, index }) => {
    const {email,paid,quentityValue,productPrice} = user
    return (
        <tr>
        <th>{ index+1}</th>
        <td>{email}</td>
            <td>{quentityValue}</td>
            <td>{productPrice}</td>
            
        <td>{paid? <span className='text-xl font-bold uppercase btn btn-sm'>Paid</span>:<span className='btn btn-sm'>Cancel order</span>}</td>
  </tr>
    );
};

export default ManageorderRow;