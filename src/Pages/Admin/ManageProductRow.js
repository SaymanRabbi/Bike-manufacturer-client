import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageProductRow = ({ user, index,refetch }) => {
    const { name, quantity,_id } = user
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
                  fetch(`https://assignment12bike.herokuapp.com/deletepd/${id}`, {
                    method:"DELETE"
                  }).then(res => res.json()).then(data => {
                      toast.success('Delete Sucess')
                      refetch()
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
        <td className='text-xl text-primary'>{name}</td>
            <td>{quantity}</td>
            <td><button className='btn btn-sm' onClick={()=>deletePd(_id)}>Delete PD</button></td>
            <td><button className='btn btn-sm'>Update PD</button></td>
  </tr>
    );
};

export default ManageProductRow;