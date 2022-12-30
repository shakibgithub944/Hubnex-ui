import React from 'react';
import logo from '../asset/logo.png'
const Navber = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-blue sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/#">
                    <img src={logo} alt="" className='m-4' style={{ height: '40px' }} />
                </a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-white"><i className="bi bi-list"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto gap-4 mb-2 mb-lg-0 fs-5 fw-bold">
                        <li className="nav-item ">
                            <a className="nav-link active text-white nav-Items" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white nav-Items" href="/#">About</a>
                        </li>
                        <li className="nav-item dropdown text-white">
                            <a className="nav-link dropdown-toggle text-white nav-Items" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Service
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white nav-Items" href="/#">Plans</a>
                        </li>
                        <li className="nav-item nav-Items">
                            <a className="nav-link text-white" href="/#">Our values</a>
                        </li>
                        <li className="nav-item nav-Items">
                            <a className="nav-link text-white" href="/#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="nav-button text-white nav-link px-3">Get Started</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navber;