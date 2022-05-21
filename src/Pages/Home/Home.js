import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Banner></Banner>
           <BusinessSummary/>
        </div>
    );
};

export default Home;