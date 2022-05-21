import React from 'react';
import CountUp from 'react-countup';
import './BusinessSummary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faStar,faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
const BusinessSummary = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1  w-3/4 mx-auto gap-5 items-center h-80   busines rounded-md mt-5'>
            <div className='mx-auto'>
                <h2 className='text-white text-2xl font-bold uppercase'>{<CountUp end={100}/>}+ customers <FontAwesomeIcon className='text-4xl' icon={faUser} /></h2>
            </div>
            <div className='mx-auto'>
                <h2 className='text-white text-2xl font-bold uppercase'>{<CountUp end={33}/>}K+ Reviews <FontAwesomeIcon className='text-4xl' icon={faStar}/></h2>
            </div>
            <div className='mx-auto'>
                <h2 className='text-white text-2xl font-bold uppercase'>{<CountUp end={50}/>}+ Tools <FontAwesomeIcon className='text-4xl' icon={faScrewdriverWrench}/></h2>
            </div>
        </div>
    );
};

export default BusinessSummary;