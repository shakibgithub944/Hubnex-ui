import React from 'react';
import about from '../asset/about.jpg'

const About = () => {
    return (
        <div className="container">

            <div className="row pt-5 mt-5 mb-5 pb-5">
                <div className="col-6">
                    <h1 className='fw-bold section-caption'>About HUBNEX</h1>
                    <p className='section-caption fs-5'>Hubnex has been serving more than hundreds of clients from different industries in several countries. Being a complete business solutions and digital marketing company, we take pride in creating success stories. Every business is unique so we do not believe in the ‘one-size-fits-all’ approach. Our list of services are diverse and you will get one stop for all your digital requirements.</p>
                    <p className='section-caption fs-5'><i className="bi bi-check-circle me-2" style={{ color: '#5948F9' }}></i><strong>Mission-</strong> At Hubnex our Mission is to provide innovative and effective integrated brand marketing and public relations solutions which help our clients grow their businesses and realise their marketing goals.</p>
                    <p className='section-caption fs-5'><i className="bi bi-check-circle me-2" style={{ color: '#5948F9' }}></i><strong>Vision-</strong> At Hubnex our Vision is to Deliver result oriented brand marketing programs and public relations campaigns that enhance our clients awareness, improve their sales and foster their growth.</p>
                    <button className='gradient-btn'>Read More</button>
                </div>
                <div className="col-6">
                    <div className='w-100'>
                        <img src={about} alt="" className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;