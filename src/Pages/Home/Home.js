import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Tools from './Tools';
import ScrollToTop from "react-scroll-to-top";
import Whatwebuild from '../Whatwebuild/Whatwebuild';
import Contactus from '../Contactus';
import PageTittle from '../../PageTittle/PageTittle';

const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <PageTittle location="Bike Manufacturers - Home"></PageTittle>
            <ScrollToTop smooth top='1000' color='#570DF8' />
            <Banner></Banner>
            <Tools/>
            <BusinessSummary></BusinessSummary>
            <Whatwebuild></Whatwebuild>
            <div className=' mt-16' style={{ backgroundColor: '#090921' }}>
                <div className='py-5'>
                <h1 className='text-3xl mb-3 text-white uppercase font-bold text-center'>Our Happy Clients</h1>
                <p className='text-center text-white'>We Always Take Care of Our Clients And they are very happy</p>
                </div>
            <Reviews></Reviews>
            </div>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;