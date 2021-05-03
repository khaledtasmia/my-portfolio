import React from 'react';
import './Projects.css';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';

const Projects = () => {
    return (
        <div id="projects" className="project">
            <h1 style={{ textShadow: "2px 2px 5px red" }} className="text-white text-center mb-5">My Projects</h1>
            <div className="container d-flex justify-content-center">
                <div className="row g-4 mb-5">
                    <div className="col-md-4 mb-5 d-flex justify-content-center">
                        <div class="card structure" style={{ width: "18rem" }}>
                            <img src={project1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Supreme League</h5>
                                <p class="card-text">This website is a collection of football teams along with their details.</p>
                                <div style={{height: "20px"}} class="card-body d-flex justify-content-center">
                                    <a href="https://github.com/khaledtasmia/supreme-league" class="card-link text-danger font-weight-bold">Github</a>
                                    <a href="https://jovial-chandrasekhar-796dfe.netlify.app/" class="card-link text-danger font-weight-bold">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 d-flex justify-content-center">
                        <div class="card structure" style={{ width: "18rem" }}>
                            <img style={{height: "137px"}} src={project2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Doctors' Portal</h5>
                                <p class="card-text">This website offers you to book the best and safe dental service in town.</p>
                                <div style={{height: "20px"}} class="card-body d-flex justify-content-center">
                                    <a href="https://github.com/khaledtasmia/doctors-portal-homepage" class="card-link text-danger font-weight-bold">Github</a>
                                    <a href="https://brave-heisenberg-97e100.netlify.app/" class="card-link text-danger font-weight-bold">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 d-flex justify-content-center">
                        <div class="card structure" style={{ width: "18rem" }}>
                            <img src={project3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Daily Baazar</h5>
                                <p class="card-text">A full-stack website to buy culinary products at a cheap rate staying at home.</p>
                                <div style={{height: "20px"}} class="card-body d-flex justify-content-center">
                                    <a href="https://github.com/khaledtasmia/daily-baazar" class="card-link text-danger font-weight-bold">Github</a>
                                    <a href="https://assignment10-b191d.web.app/" class="card-link text-danger font-weight-bold">Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;