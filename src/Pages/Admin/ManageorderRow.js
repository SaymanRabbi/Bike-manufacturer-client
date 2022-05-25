import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageorderRow = ({ user, index,refetch }) => {
    const { email, paid, quentityValue, productPrice,_id } = user
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
        <th>{ index+1}</th>
        <td>{email}</td>
            <td>{quentityValue}</td>
            <td>{productPrice}</td>
            
        <td>{paid? <button className='text-xl font-bold uppercase btn btn-sm' disabled={paid}>Paid</button>:<span className='btn btn-sm' onClick={()=>deletePd(_id)}>Cancel order</span>}</td>
  </tr>
    );
};

export default ManageorderRow;