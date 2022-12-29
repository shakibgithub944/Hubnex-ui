import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Faq from '../Faq/Faq';
import Navber from '../Navber/Navber';
import Project from '../Project/Project';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <Counter></Counter>
            <Service></Service>
            <Project></Project>
            <Testimonial></Testimonial>
            <Faq></Faq>
        </div>
    );
};

export default Home;