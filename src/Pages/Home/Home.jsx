import React from 'react';
import Hero from '../../Componants/Hero/Hero';
import TodaysPic from './TodaysPic/TodaysPic';
import LiveActions from './LiveActions/LiveActions';

const Home = () => {
    return (
        <div>
            <Hero />
            <LiveActions />
            <TodaysPic />
        </div>
    );
};

export default Home;