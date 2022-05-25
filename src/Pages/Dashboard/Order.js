import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const Order = ({ order, index,refetch }) => {
    const {productName,productPrice,_id,quentityValue,paid,tnxId,shipped
    } = order
    const deletePd = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                  fetch(`https://assignment12bike.herokuapp.com/delete/${id}`, {
                    method:"DELETE"
                  }).then(res => res.json()).then(data => {
                    refetch()
                    toast.success('Delete Sucess')
                })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{(productName).slice(0,30) +'..'}</td>
            <td className='text-2xl font-bold text-primary'>${productPrice}</td>
            <td className='text-2xl font-bold text-primary'>${quentityValue}</td>
            <td className='flex gap-3 justify-center'>
                {
                    paid ? <><button className='btn btn-primary'>{ paid &&shipped?'shipped':'Pending'}</button> <span className='text-xl text-secondary'>{tnxId}</span></> : <>
                    <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-sm'>UnPaid</button></Link>
                    <button className='btn btn-sm' onClick={()=>deletePd(_id)}>Cancel Order</button>
                    </>
                }
            </td>
            </tr>
    );
};

export default Order;