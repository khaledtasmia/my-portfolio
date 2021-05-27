import React from 'react';
import './Summary.css';
import pic1 from '../../../images/circle-cropped.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Summary = () => {
    return (
        <div id="summary"className="container">
            <div className="gy-3 mt-5 pt-5 d-flex align-items-center justify-content-center">
                <div data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
                    <h1 style={{ textShadow: "2px 2px 5px red" }} className="text-white text-center">Tasmia Khaled</h1>
                    <h6 className="text-secondary text-center">
                        Engineer | Mern Stack Developer | Programmer
                    </h6>
                    <div className="d-flex justify-content-center social-media">
                        <a className="fbIcon me-4" href="https://www.facebook.com/tasmia.khaled/" target="_blank" rel="norefferer"><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a>
                        <a className="fbIcon me-4" href="https://www.linkedin.com/in/tasmia-khaled-b43173211/" target="_blank" rel="norefferer"><FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon></a>
                        <a className="fbIcon me-4" href="https://github.com/khaledtasmia" target="_blank" rel="norefferer"><FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon></a>
                    </div>
                    <div class="text-center">
                        <a href="/resumeFolder/Resume.pdf" download><button className="btn btn-danger mt-3 me-4"><FontAwesomeIcon className="me-2" icon={faFileDownload} size="1x"></FontAwesomeIcon>Download Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;