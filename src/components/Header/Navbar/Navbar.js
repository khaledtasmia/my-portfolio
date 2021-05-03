import React from 'react';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Navbar = () => {
    return (
        <div data-aos="fade-down" data-aos-delay="50"
            data-aos-duration="1000">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white fs-4" href="#">Tasmia Khaled</a>
                </div>
                <div className="nav justify-content-end">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse fs-5" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#summary">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" href="#blogs">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Navbar;