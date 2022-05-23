import React from 'react';

const Order = ({ order, index }) => {
    const {productName,productPrice} = order
    console.log(order)
    return (
        <tr>
            <th>{index+1}</th>
            <td>{(productName).slice(0,30) +'..'}</td>
            <td className='text-2xl font-bold text-primary'>${productPrice}</td>
              <td><button className='btn btn-sm'>UnPaid</button></td>
            </tr>
    );
};

export default Order;