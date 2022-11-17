import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-light'>
            <section className="container d-flex justify-content-center">
                <div className="w-50 p-3 text-center">
                    <h1>Tutorial Point</h1>
                    <p>Office: 32/A, Road:12, AR Plaza <br />Dhanmondi 27</p>
                    <span> Privacy Policy || Terms and Conditiob</span> <br/><br/><br/>
                    <div>
                        <FaFacebook></FaFacebook>
                        <FaWhatsapp></FaWhatsapp>
                        <FaTwitter></FaTwitter>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;