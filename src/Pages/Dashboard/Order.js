import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order, index }) => {
    const {productName,productPrice,_id,quentityValue} = order
    console.log(order)
    return (
        <tr>
            <th>{index+1}</th>
            <td>{(productName).slice(0,30) +'..'}</td>
            <td className='text-2xl font-bold text-primary'>${productPrice}</td>
            <td className='text-2xl font-bold text-primary'>${quentityValue}</td>
            <td className='flex gap-3 justify-center'><Link to={`/dashboard/payment/${_id}`}><button className='btn btn-sm'>UnPaid</button></Link>
            <button className='btn btn-sm'>Cancel Order</button>
            </td>
            </tr>
    );
};

export default Order;