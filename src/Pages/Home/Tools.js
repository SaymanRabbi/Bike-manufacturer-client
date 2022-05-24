import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Tool from './Tool';

const Tools = () => {
    const { data:tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tools', {
        method: 'GET',
        headers: {
            'authorization': `Barer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='py-10'>
            <h1 className='text-primary text-3xl text-center font-bold mb-10'>
            Motorcycle Tools & Tool Kits
            </h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                  (tools).slice(0,6).map(data => <Tool tool={data} key={data._id}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;