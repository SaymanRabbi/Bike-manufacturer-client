import React from 'react';
import CountUp from 'react-countup';
import './BusinessSummary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faStar,faScrewdriverWrench,faHandHoldingDollar} from '@fortawesome/free-solid-svg-icons'
const BusinessSummary = () => {
    return (
        <div className='busines rounded-md mt-5 py-5  w-3/4 mx-auto flex justify-center'>
            <div>
            <h2 className='text-center text-4xl font-bold text-primary py-10'>MILLIONS BUSINESS TRUST US</h2>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 items-center'>
            <div className='mx-auto text-center'>
                        <h2 className=''><FontAwesomeIcon className='lg:text-5xl text-3xl text-white' icon={faUser} /></h2>
                        <h1 className='text-primary my-3 text-3xl font-bold uppercase'>{<CountUp end={100} />}+</h1>
                        <h2 className=' text-white lg:text-3xl font-bold uppercase text-xl'>Customer</h2>
            </div>
                    <div className='mx-auto text-center'>
                    {/* 120M+ Annual revenue */}
                        <h2 className=''><FontAwesomeIcon className='lg:text-5xl text-3xl text-white' icon={faHandHoldingDollar} /></h2>
                        <h1 className='text-primary my-3 text-3xl font-bold uppercase'>{<CountUp end={120} />}M+</h1>
                        <h2 className=' text-white lg:text-3xl font-bold uppercase text-xl'>Annual revenue</h2>
            </div>
            <div className='mx-auto text-center'>
                        {/* <h2 className='text-white text-2xl font-bold uppercase'>{<CountUp end={33}/>}K+ Reviews <FontAwesomeIcon className='text-4xl' icon={faStar}/></h2> */}
                        <h2 className=''><FontAwesomeIcon className='lg:text-5xl text-3xl text-white' icon={faStar} /></h2>
                        <h1 className='text-primary my-3 text-3xl font-bold uppercase'>{<CountUp end={33} />}K+</h1>
                        <h2 className=' text-white lg:text-3xl font-bold uppercase text-xl'>Reviews</h2>
                
            </div>
            <div className='mx-auto text-center'>
                        {/* <h2 className='text-white text-2xl font-bold uppercase'>{<CountUp end={50}/>}+ Tools <FontAwesomeIcon className='text-4xl' icon={faScrewdriverWrench}/></h2> */}
                        <h2 className=''><FontAwesomeIcon className='lg:text-5xl text-3xl text-white' icon={faScrewdriverWrench} /></h2>
                        <h1 className='text-primary my-3 text-3xl font-bold uppercase'>{<CountUp end={50} />}+</h1>
                        <h2 className=' text-white lg:text-3xl font-bold uppercase text-xl'>Tools </h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;