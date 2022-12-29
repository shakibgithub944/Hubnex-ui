import React from 'react';
import hero from '../asset/hero-img.png'

const Banner = () => {
    return (
        <section className="container-fluid bg-blue min-vh-100" >
            <div className="row">

            </div>

            <div className="row min-vh-100">
                <div className="col-1"></div>
                <div className="col-5 d-flex align-items-center">
                    <div className="text-white">
                        <h1 className="heading-text">We have innovative team to take care of your preferences</h1>
                        <p className="fw-bold fs-4 lh-base" style={{ color: '#C7C9D8' }}>Hubnex is a Gurgaon headquartered global venture which specialises in scaling up established MSMEs and start up businesses across various industries such as hospitality, FMCG, technology, services and so on.</p>
                        <button className='banner-button fw-bold mt-3'>Get Started</button>
                    </div>
                </div>
                <div className="col-5 d-flex align-items-center">
                    <div className="at-item">
                        <img src={hero} alt="" className="w-75 pt-5" />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </section>
    );
};

export default Banner;