import React from 'react';
import Ourservices from '../../Ourservices/Ourservices';
import Care from '../Care/Care';
import Banner from './Banner/Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info/Info';
import MakeAppoinment from './MakeAppoinment';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12' >
            <Banner></Banner>
            <Info></Info>
            <Ourservices></Ourservices>
            <Care></Care>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div >
    );
};

export default Home;