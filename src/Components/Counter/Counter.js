import React from 'react';
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div className='container-fluid bg-counter text-white'>
            <div className="row">
                <div className="col-3 text-center">
                    <div  style={{padding:'80px'}} >
                    <h1 className='fw-bold' style={{fontSize:'50px'}}><CountUp end={200} /></h1>
                    <p className=''>Businesses Digitized</p>
                    </div>
                </div>
                <div className="col-3 text-center ">
                    <div style={{padding:'80px'}}>
                    <h1 className='fw-bold' style={{fontSize:'50px'}}><CountUp end={50} /></h1>
                    <p>Selling Products</p>
                    </div>
                </div>
                <div className="col-3 text-center ">
                    <div style={{padding:'80px'}}>
                    <h1 className='fw-bold' style={{fontSize:'50px'}}><CountUp end={130} /></h1>
                    <p>Businesses Making Profits</p>
                    </div>
                </div>
                <div className="col-3 text-center ">
                    <div style={{padding:'80px'}}>
                    <h1 className='fw-bold' style={{fontSize:'50px'}}><CountUp end={1000} /></h1>
                    <p>Business Conversion</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;