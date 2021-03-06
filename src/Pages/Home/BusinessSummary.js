import React from 'react';
import CountUp from 'react-countup';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './BusinessSummary.css'
const BusinessSummary = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='w-3/4 mx-auto py-5'>
        <div className="stats  shadow-2xl  h-40  rounded-md w-full">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">MILLIONS BUSINESS TRUST US</div>
    <div className="stat-value text-primary"><CountUp end={25.6} />M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Customer</div>
    <div className="stat-value text-secondary"><CountUp end={100} />K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={user?.photoURL? user?.photoURL:'https://i.ibb.co/PhHRTcd/download.jpg'} alt='' />
        </div>
      </div>
    </div>
    <div className="stat-title">Revinew</div>
    <div className="stat-value">{<CountUp end={120} />}M+</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
            </div>
            </div>
        // <div className='busines rounded-md mt-5 py-5  w-3/4 mx-auto flex justify-center'>
        //     <div>
        //     <h2 className='text-center text-4xl font-bold text-primary py-10'>MILLIONS BUSINESS TRUST US</h2>
        //     <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 items-center'>
        //     <div className='mx-auto text-center'>
        //                 <h2 className=''><FontAwesomeIcon className='lg:text-5xl text-3xl text-white' icon={faUser} /></h2>
        //                 <h1 className='text-primary my-3 text-3xl font-bold uppercase'>{<CountUp end={100} />}+</h1>
        //                 <h2 className=' text-white lg:text-3xl font-bold uppercase text-xl'>Customer</h2>
        //     </div>
        //             <div className='mx-auto text-center'>
        //             {/* 120M+ Annual revenue */}
        //                 <h2 className=''><FontAwesomeIcon className='lg:text-5xl text-3xl text-white' icon={faHandHoldingDollar} /></h2>
        //                 <h1 className='text-primary my-3 text-3xl font-bold uppercase'>{<CountUp end={120} />}M+</h1>
        //                 <h2 className=' text-white lg:text-3xl font-bold uppercase text-xl'>revenue</h2>
        //     </div>
        //     <div className='mx-auto text-center'>
        //                 {/* <h2 className='text-white text-2xl font-bold uppercase'>{<CountUp end={33}/>}K+ Reviews <FontAwesomeIcon className='text-4xl' icon={faStar}/></h2> */}
        //                 <h2 className=''><FontAwesomeIcon className='lg:text-5xl text-3xl text-white' icon={faStar} /></h2>
        //                 <h1 className='text-primary my-3 text-3xl font-bold uppercase'>{<CountUp end={33} />}K+</h1>
        //                 <h2 className=' text-white lg:text-3xl font-bold uppercase text-xl'>Reviews</h2>
                
        //     </div>
        //     <div className='mx-auto text-center'>
        //                 {/* <h2 className='text-white text-2xl font-bold uppercase'>{<CountUp end={50}/>}+ Tools <FontAwesomeIcon className='text-4xl' icon={faScrewdriverWrench}/></h2> */}
        //                 <h2 className=''><FontAwesomeIcon className='lg:text-5xl text-3xl text-white' icon={faScrewdriverWrench} /></h2>
        //                 <h1 className='text-primary my-3 text-3xl font-bold uppercase'>{<CountUp end={50} />}+</h1>
        //                 <h2 className=' text-white lg:text-3xl font-bold uppercase text-xl'>Tools </h2>
        //         </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default BusinessSummary;