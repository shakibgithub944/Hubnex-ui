import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid footer-bg text-white'>
            <div className="row p-5">
                <div className="col-lg-3">
                    <p>
                        Hubnex Media INC. <br />
                        #05, Huddle, Ground Floor,<br />
                        Tower-B, DLF Cyber City,<br />
                        Gurugram, Haryana-122002 <br />
                        <b>Phone:</b> +91 6392-750561 <br />
                        <b>Email:</b> hello@hubnex.in <br />
                    </p>
                </div>
                <div className="col-lg-2 col-sm-12 ">
                    <h5> Useful Links</h5>

                    <div className='text-white'>
                        <p><i class="bi bi-chevron-right"></i> Home</p>
                        <p><i class="bi bi-chevron-right"></i>About us</p>
                        <p><i class="bi bi-chevron-right"></i>Refund Policy</p>
                        <p><i class="bi bi-chevron-right"></i>Terms of service</p>
                        <p><i class="bi bi-chevron-right"></i>Privacy policy</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 ">
                    <h5>Our Services</h5>

                    <div className='text-white'>
                        <p><i class="bi bi-chevron-right"></i>Website and App Development</p>
                        <p><i class="bi bi-chevron-right"></i>Search Engine Optimization</p>
                        <p><i class="bi bi-chevron-right"></i>Social Media Optimisation</p>
                        <p><i class="bi bi-chevron-right"></i>PR and Brand Management</p>
                        <p><i class="bi bi-chevron-right"></i>Content Management</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 ">
                    <h5>Join Our Newsletter</h5>

                    <div className='text-white'>
                        <p>Subsribe for More</p>
                        <form className="d-flex">
                            <input className="form-control" type="search" placeholder="email" aria-label="Search" />
                            <button className="btn text-white" style={{ backgroundColor: 'violet' }} type="submit">Subsribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row p-5">
                <hr className='mx-auto my-5' />
                <div className="col-lg-6 col-sm-12">
                    <p>
                        Hubnex is a leading Digital Marketing Agency with expertise in Lead Generation,
                        Digital Marketing, Website and Mobile Application Designing and Development and Election Management Campaigns
                        Hubnex - is rated 4.5 stars by https://www.facebook.com/hubnex/
                        Copyright © 2021 Hubnex. All Rights Reserved
                    </p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className='text-end'>
                    <span className='social-icon'><i class="bi bi-twitter"></i></span>
                    <span className='social-icon'><i class="bi bi-facebook"></i></span>
                    <span className='social-icon'><i class="bi bi-instagram"></i></span>
                    <span className='social-icon'><i class="bi bi-linkedin"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;