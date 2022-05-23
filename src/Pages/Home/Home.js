import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Tools from './Tools';

const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Banner></Banner>
            <Tools/>
            <BusinessSummary />
            <Reviews></Reviews>
        </div>
    );
};

export default Home;