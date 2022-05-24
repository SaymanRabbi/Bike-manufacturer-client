import React from 'react';

const AdminRow = ({ user, index,refetch }) => {
    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/email/admin?email=${email}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Barer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            refetch()
        })
    }
    const {email,role} = user
    return (
        <tr>
            <th>{ index+1}</th>
            <td>{email}</td>
            <td>{role? <span className='text-primary text-xl font-bold uppercase'>Admin</span>:'User'}</td>
            <td>{ role?<button className='btn btn-sm'>Alredy Admin</button>:<button className='btn btn-sm' onClick={()=>makeAdmin(email)}>Make Admin</button>}</td>
      </tr>
    );
};

export default AdminRow;