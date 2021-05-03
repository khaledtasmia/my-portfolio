import React from 'react';
import '../Projects/Projects.css';
import blog1 from '../../images/blog1.jpg';
import blog2 from '../../images/blog2.jpg';
import blog3 from '../../images/blog3.png';

const Blogs = () => {
    return (
        <div id="blogs" className="project">
            <h1 style={{ textShadow: "2px 2px 5px red" }} className="text-white text-center mb-5">My Blogs</h1>
            <div className="container d-flex justify-content-center">
                <div className="row g-4 mb-5">
                    <div className="col-md-4 d-flex justify-content-center">
                        <div class="card structure" style={{ width: "18rem" }}>
                            <img style={{ height: "137px" }} src={blog1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Fundamental of JS</h5>
                                <p style={{ marginTop: "36px" }} class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div style={{ height: "20px" }} className="card-body text-center mb-1">
                                    <button style={{ height: "40px" }} className="btn btn-danger">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div class="card structure" style={{ width: "18rem" }}>
                            <img style={{ height: "137px" }} src={blog2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Getting Started With React.js</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div style={{ height: "20px" }} className="card-body text-center mb-1">
                                    <button style={{ height: "40px" }} className="btn btn-danger">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div class="card structure" style={{ width: "18rem" }}>
                            <img style={{ height: "137px" }} src={blog3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Basics of Github</h5>
                                <p style={{ marginTop: "36px" }} class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div style={{ height: "20px" }} className="card-body text-center mb-1">
                                    <button style={{ height: "40px" }} className="btn btn-danger">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;