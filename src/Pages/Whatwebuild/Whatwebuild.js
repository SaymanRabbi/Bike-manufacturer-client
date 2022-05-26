import React from 'react';
import img from '../../Images/undraw_business_deal_re_up4u.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserAstronaut} from '@fortawesome/free-solid-svg-icons'
const Whatwebuild = () => {
    return (
        <div className='my-16'>
            <h2 className='lg:text-5xl md:text-3xl text-2xl text-center mb-5 font-bold text-primary'>Our Service <span className=' w-fit' style={{borderBottom:'2px solid black'}}>Section</span> <FontAwesomeIcon icon={faUserAstronaut}></FontAwesomeIcon></h2>
             <div className='w-3/4 mx-auto grid lg:grid-cols-2 gap-5 items-center'>
            <div >
                <img className='w-full' src={img} alt="" />
            </div>
            <div >
                <h2 className='text-3xl font-bold mb-8'>What  Service Provide Our Client!</h2>
                <p className=' text-base text-gray-600 mb-5'>
                Relationships and exist in many industries, including sales, software and health care. Client services can describe interactions such as:
                </p>
                <p className=' text-base text-gray-600'>
                Client services are the processes and interactions organizations and members of their staff have with their clients. Client services are an important part of maintaining client and customer 
                </p>
            </div>
        </div>
       </div>
    );
};

export default Whatwebuild;