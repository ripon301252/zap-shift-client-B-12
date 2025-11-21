import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../Component/HowItWorks';
import OurServices from '../../Component/OurServices';
import Brands from '../../Component/Brands';
import Priority from '../../Component/Priority';
import Reviews from '../../Reviews/Reviews';
import FAQ from '../../FAQ/FAQ';
// import Reviews1 from '../../Reviews/Reviews1';


const reviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <Brands></Brands>
            <Priority></Priority>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            {/* <Reviews1 reviewsPromise={reviewsPromise}></Reviews1> */}
            <FAQ></FAQ>
        </div>
    );
};

export default Home;