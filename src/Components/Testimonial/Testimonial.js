import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";
import reviewer from '../asset/testimonials-1.jpg'

const Testimonial = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor: '#F9F8FF' }}>
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className='fw-bold section-caption'>TESTIMONIALS</h1>
                    <hr className='mx-auto' style={{ width: '80px', color: '#F3A01C', height: '3px' }} />
                    <p className='section-caption'>What's Our Clients Says About Us</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10 col-sm-12">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="py-5"
                    >
                        <SwiperSlide className="">
                            <div className="py-5 px-3 rounded col-sm-12" style={{ backgroundColor: '#FFFFFF' }}>
                                <i className="section-caption">
                                    <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span> “ I worked with Hubnex for a few months, they never hesitate to take a step forward &amp; take full responsibility for the consequences. There is nothing to say” <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span>
                                </i>
                            </div>
                            <div className="ms-4" style={{ marginTop: '-35px' }}>
                                <img src={reviewer} alt="" className="w-25 rounded-pill" />
                                <h4 className="mb-0" style={{ color: '#2C4964' }}>Neeti khanna</h4>
                                <p className="fw-bold text-muted">Enterpreneur, New Delhi</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5 px-3 rounded" style={{ backgroundColor: '#FFFFFF' }}>
                                <i className="section-caption">
                                    <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span> “ I worked with Hubnex for a few months, they never hesitate to take a step forward &amp; take full responsibility for the consequences. There is nothing to say” <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span>
                                </i>
                            </div>
                            <div className="ms-4" style={{ marginTop: '-35px' }}>
                                <img src={reviewer} alt="" className="w-25 rounded-pill" />
                                <h4 className="mb-0" style={{ color: '#2C4964' }}>Neeti khanna</h4>
                                <p className="fw-bold text-muted">Enterpreneur, New Delhi</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5 px-3 rounded" style={{ backgroundColor: '#FFFFFF' }}>
                                <i className="section-caption">
                                    <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span> “ I worked with Hubnex for a few months, they never hesitate to take a step forward &amp; take full responsibility for the consequences. There is nothing to say” <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span>
                                </i>
                            </div>
                            <div className="ms-4" style={{ marginTop: '-35px' }}>
                                <img src={reviewer} alt="" className="w-25 rounded-pill" />
                                <h4 className="mb-0" style={{ color: '#2C4964' }}>Neeti khanna</h4>
                                <p className="fw-bold text-muted">Enterpreneur, New Delhi</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5 px-3 rounded" style={{ backgroundColor: '#FFFFFF' }}>
                                <i className="section-caption">
                                    <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span> “ I worked with Hubnex for a few months, they never hesitate to take a step forward &amp; take full responsibility for the consequences. There is nothing to say” <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span>
                                </i>
                            </div>
                            <div className="ms-4" style={{ marginTop: '-35px' }}>
                                <img src={reviewer} alt="" className="w-25 rounded-pill" />
                                <h4 className="mb-0" style={{ color: '#2C4964' }}>Neeti khanna</h4>
                                <p className="fw-bold text-muted">Enterpreneur, New Delhi</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5 px-3 rounded" style={{ backgroundColor: '#FFFFFF' }}>
                                <i className="section-caption">
                                    <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span> “ I worked with Hubnex for a few months, they never hesitate to take a step forward &amp; take full responsibility for the consequences. There is nothing to say” <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span>
                                </i>
                            </div>
                            <div className="ms-4" style={{ marginTop: '-35px' }}>
                                <img src={reviewer} alt="" className="w-25 rounded-pill" />
                                <h4 className="mb-0" style={{ color: '#2C4964' }}>Neeti khanna</h4>
                                <p className="fw-bold text-muted">Enterpreneur, New Delhi</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5 px-3 rounded" style={{ backgroundColor: '#FFFFFF' }}>
                                <i className="section-caption">
                                    <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span> “ I worked with Hubnex for a few months, they never hesitate to take a step forward &amp; take full responsibility for the consequences. There is nothing to say” <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span>
                                </i>
                            </div>
                            <div className="ms-4" style={{ marginTop: '-35px' }}>
                                <img src={reviewer} alt="" className="w-25 rounded-pill" />
                                <h4 className="mb-0" style={{ color: '#2C4964' }}>Neeti khanna</h4>
                                <p className="fw-bold text-muted">Enterpreneur, New Delhi</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="py-5 px-3 rounded" style={{ backgroundColor: '#FFFFFF' }}>
                                <i className="section-caption">
                                    <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span> “ I worked with Hubnex for a few months, they never hesitate to take a step forward &amp; take full responsibility for the consequences. There is nothing to say” <span style={{ color: 'violet' }}><i className="bi bi-quote"></i></span>
                                </i>
                            </div>
                            <div className="ms-4" style={{ marginTop: '-35px' }}>
                                <img src={reviewer} alt="" className="w-25 rounded-pill" />
                                <h4 className="mb-0" style={{ color: '#2C4964' }}>Neeti khanna</h4>
                                <p className="fw-bold text-muted">Enterpreneur, New Delhi</p>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
                <div className="col-lg-1"></div>
            </div>

        </div>
    );
};

export default Testimonial;