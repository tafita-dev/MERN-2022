import React from 'react';
import Alayout from '../Layout';

const Home = () => {
    return (
        <Alayout>
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.jpg" alt="Image" style={{height : 650}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" id='serve'>
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                                    <a href="/services" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Services</a>
                                    <a href="/contacts" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                <div className="container-fluid facts py-5 pt-lg-0" id='serves'>
                    <div className="container py-5 pt-lg-0">
                        <div className="row gx-0">
                            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                                <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                                    <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-users text-primary"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-white mb-0">Happy Clients</h5>
                                        <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                                <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                                    <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-check text-white"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-primary mb-0">Projects Done</h5>
                                        <h1 className="mb-0" data-toggle="counter-up">12345</h1>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                                <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                                    <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                                        <i className="fa fa-award text-primary"></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="text-white mb-0">Win Awards</h5>
                                        <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                </div>
        </Alayout >
    );
};

export default Home;
