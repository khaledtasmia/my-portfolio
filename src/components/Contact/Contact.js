import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_qnq7dqh', 'template_tk9hwjf', e.target, 'user_le9I8UrQO3imT3Gl75nIB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div id="contact" className="contact">
            <div className="container">
                <div>
                    <h1 style={{ textShadow: "2px 2px 5px red" }} className="text-white text-center mb-5">Contact Me</h1>
                </div>
                <form onSubmit={sendEmail}>
                    <div class="row mb-3">
                        <label style={{ textShadow: "2px 2px 5px red" }} class="col-sm-1 col-form-label text-white fs-4">Name</label>
                        <div class="col-sm-10 mt-2">
                            <input name="user_name" type="Name" class="form-control" id="user_name" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label style={{ textShadow: "2px 2px 5px red" }} for="inputEmail3" class="col-sm-1 col-form-label text-white fs-4">Email</label>
                        <div class="col-sm-10 mt-2">
                            <input name="name" type="email" class="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label style={{ textShadow: "2px 2px 5px red" }} class="col-sm-1 col-form-label text-white fs-4">Message</label>
                        <div class="col-sm-10">
                            <textarea style={{ height: "300px" }} className="form-control" name="message" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button style={{ width: "300px" }} className="btn btn-danger mb-5" type="submit" value="Send">Send</button>
                    </div>
                </form>
                {/* <form onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}
            </div>
        </div>
    );
};

export default Contact;