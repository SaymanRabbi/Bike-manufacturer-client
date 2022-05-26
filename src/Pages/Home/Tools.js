import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Tool from './Tool';

const Tools = () => {
    const { data:tools, isLoading } = useQuery('tools', () => fetch('https://assignment12bike.herokuapp.com/tools', {
        method: 'GET',
        headers: {
            'authorization': `Barer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='py-10 bg-gray-100'>
             <h2 className='lg:text-5xl md:text-3xl text-2xl text-center font-bold text-primary my-10 mb-20'> Motorcycle Tools & <span className=' w-fit' style={{borderBottom:'3px solid black'}}>Tool Kits</span></h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                  (tools).slice(0,6).map(data => <Tool tool={data} key={data._id}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;