import React from 'react';
import shape from '../asset/graph.png'
import shapeHiver from '../asset/graphHover.png'
const Service = () => {
    
    return (
        <div className='container-fluid' style={{backgroundColor:'#F9F8FF'}}>
            <div className="row py-5">
                <div className="col-12 text-center"data-aos="fade-up" data-aos-duration="1500">
                    <h1 className='fw-bold section-caption'>Services</h1>
                    <hr className='mx-auto' style={{ width: '80px', color: '#F3A01C', height: '3px' }} />
                    <p className='section-caption'>Our Wide Range Of Services</p>
                </div>
            </div>
            <div className="container my-5">
                <div className="row pb-5" data-aos="zoom-in" data-aos-duration="1500">
                    <div className="col-sm-12 col-md-6 col-lg-4 icon">
                        <div className="text-center p-3 serviceCard" style={{backgroundColor:'#FFFFFF'}}>
                            <div className='parent'>
                                <img src={shape} className='' alt="" />
                                <span className='child-icon'><i className="bi bi-globe2" style={{ fontSize: '35px' }}></i></span>
                            </div>
                            <h2>Website and Application</h2>
                            <p>In the world of digital revolution, a fantastic user friendly website making good business sense will fetch you far more customers than a regular website.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 icon">
                        <div className="text-center p-3 serviceCard" style={{backgroundColor:'#FFFFFF'}}>
                            <div className='parent'>
                                <img src={shape} className='' alt="" />
                                <span className='child-icon'><i className="bi bi-globe2" style={{ fontSize: '35px' }}></i></span>
                            </div>
                            <h2>Website and Application</h2>
                            <p>In the world of digital revolution, a fantastic user friendly website making good business sense will fetch you far more customers than a regular website.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 icon">
                        <div className="text-center p-3 serviceCard" style={{backgroundColor:'#FFFFFF'}}>
                            <div className='parent'>
                                <img src={shape} className='' alt="" />
                                <span className='child-icon'><i className="bi bi-globe2" style={{ fontSize: '35px' }}></i></span>
                            </div>
                            <h2>Website and Application</h2>
                            <p>In the world of digital revolution, a fantastic user friendly website making good business sense will fetch you far more customers than a regular website.</p>
                        </div>
                    </div>
                    
                </div>
            </div>


        </div>
    );
};

export default Service;