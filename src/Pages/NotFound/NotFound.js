import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div style={{minHeight:'100vh'}} className='notfound flex items-center justify-around'>
            <div className='text-center'>
                <h2 className='text-white text-7xl font-bold mb-3'>404!😢</h2>
                <h2 className='text-white text-7xl font-semibold mb-3'>Page Not Found</h2>
                <Link to='/'><button className='bg-white px-2 py-2 rounded font-semibold'>Back To Home</button></Link>
            </div>
            <div>

            </div>
        </div>
    );
};

export default NotFound;