import React, { useEffect } from 'react';
import './About.css';
import pic2 from '../../images/circle-cropped (1).png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect( () => {
        AOS.init({
            duration: 2000,
            offset: 400
        });
    },[])

    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div data-aos="fade-right" className="col-md-6 pt-5 d-flex justify-content-center">
                        <img className="img-fluid" style={{ width: "330px" }} src={pic2} alt="" srcset="" />
                    </div>
                    <div data-aos="fade-left" className="col-md-5 offset-md-1 pt-5 ">
                        <h2 style={{ textShadow: "2px 2px 5px red" }} className="text-white text-center">About Me</h2>
                        <p className="text-white">I enjoy building everything from small business sites to rich interactive websites. I have a diverse set of skills, ranging from design, to HTML + CSS + JavaScript, all the way to React.js, Node.js and Express.js. As my educational background is Computer Science and Engineering, I am familiar with different types of web tools since the beginning. I strive to make my websites look beautiful. I am very much patient while fixing any kind of bugs. I believe that makes me a qualified web developer. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;