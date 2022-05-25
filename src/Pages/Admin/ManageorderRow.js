import React from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageorderRow = ({ user, index,refetch }) => {
    const { email, paid, quentityValue, productPrice,_id,shipped} = user
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
  const updatePd = (_id) => {
    fetch(`http://localhost:5000/shipped/${_id}`, {
      method: "PATCH"
    }).then(res => res.json()).then(data => {
      if (data.messages) {
        console.log(data)
        refetch()
      }
    })
  }
    return (
        <tr>
        <th>{ index+1}</th>
        <td>{email}</td>
            <td>{quentityValue}</td>
            <td>{productPrice}</td>
            
        <td>{paid && shipped ? <button className='text-xl font-bold uppercase btn btn-sm' >shipped</button> : ''}
          {
            paid?<button className='text-xl font-bold uppercase btn btn-sm' disabled={paid && shipped} onClick={() => updatePd(_id)}>Pending</button>:<span className='btn btn-sm' onClick={() => deletePd(_id)}>Unpaid</span>
        }
        </td>
  </tr>
    );
};

export default ManageorderRow;