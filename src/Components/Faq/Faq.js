import React from 'react';

const Faq = () => {
    return (
        <div className='container-fluid bg-faq'>
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className='fw-bold text-white'>FREQUENTLY ASKED QUESTIONS</h1>
                    <hr className='mx-auto' style={{ width: '80px', color: 'white', height: '3px' }} />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 pb-5">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: '#9387FB' }}>
                                        <span style={{ color: '#9387FB' }}><i className="bi bi-question-circle mx-2"></i></span> How do you increase sales?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            There are many ways to increase sales, even when working with a limited budget. The best way to increase sales is to grow the number of leads or customers in your sales funnel. By effectively marketing your business you can increase your number of qualified leads and potential sales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"style={{ color: '#9387FB' }}>
                                        <span style={{ color: '#9387FB' }}><i className="bi bi-question-circle mx-2"></i></span>  How do I get more customers for my Business?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            If you have your lead generation strategy and process in place, then it’s time to ramp up your marketing efforts to grow the number of leads in your funnel. Identify your target audience and where you can reach them, plan an effective marketing strategy with clear steps and objectives, then implement your strategy and measure its results. At Hubnex we help you to get more customers for your Business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" style={{ color: '#9387FB' }}>
                                        <span style={{ color: '#9387FB' }}><i className="bi bi-question-circle mx-2"></i></span>  What strategies would you use to generate quality leads?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            We are specialized in using digital marketing techniques to generate leads, both for ourselves and our clients. Using a range of methods, from driving organic traffic from Google to creating engaging content on social media, we are able to consistently drive targeted traffic that results in high-quality leads.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour"style={{ color: '#9387FB' }}>
                                        <span style={{ color: '#9387FB' }}><i className="bi bi-question-circle mx-2"></i></span>  What is Social Media Marketing (SMM)?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Social Media Marketing (SMM) is a general term used to describe promoting your business on any of the variety of online channels that enable users to create and share content and participate in conversations in public and private communities. There are literally hundreds of social media channels to choose from such as Facebook, Twitter, LinkedIn, Instagram and YouTube.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive"style={{ color: '#9387FB' }}>
                                        <span style={{ color: '#9387FB' }}><i className="bi bi-question-circle mx-2"></i></span>  Is it worth it to advertise on Facebook?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Allocating a budget to Facebook Advertising can be very worthwhile with an effective strategy set up. With ads you can reach your target audience through selecting an area, an age range and even a number of different spoken languages. You can control who sees your product, which will ultimately boost your website traffic and your conversions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix"style={{ color: '#9387FB' }}>
                                        <span style={{ color: '#9387FB' }}><i className="bi bi-question-circle mx-2"></i></span>  Is Digital Marketing cost effective?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Yes, digital marketing is one of the most cost-effective forms of marketing available to businesses. It's easier to accurately measure the results of your marketing campaigns than other traditional forms of marketing, which allows you to make informed decisions about the value it provides. A well-planned digital marketing campaign can result in significant returns when implemented effectively for a relatively modest investment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button fw-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven"style={{ color: '#9387FB' }}>
                                        <span style={{ color: '#9387FB' }}><i className="bi bi-question-circle mx-2"></i></span>How long does a new website take to design and develop?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Yes, digital marketing is one of the most cost-effective forms of marketing available to businesses. It's easier to accurately measure the results of your marketing campaigns than other traditional forms of marketing, which allows you to make informed decisions about the value it provides. A well-planned digital marketing campaign can result in significant returns when implemented effectively for a relatively modest investment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;