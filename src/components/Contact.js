import React from 'react';
import Fbook from '../fbook.png'
import Insta from '../insta.png'
import Twit from '../twit.png'

const Contact = () => {
    return (
        <section id="contact" style={{ textAlign: 'center' }}>
            <h2>Contact</h2>
            <p>Email: <a href="mailto:tabanaoleeann@gmail.com">tabanaoleeann@gmail.com</a></p>
            <p>Phone: 09817342681</p>
            <p>Socials: 
                <a href="https://www.facebook.com/leeann.tabanao.5?mibextid=JRoKGi" className="icon-link">
                    <img src={Fbook} alt="Facebook" />
                </a>
                <a href="" className="icon-link">
                    <img src={Insta} alt="Instagram" />
                </ a>
                <a href="" className="icon-link">
                    <img src={Twit} alt="Twitter" />
                </a>
            </p>
            <style>
                {`
                    .icon-link img {
                        width: 50px;
                        height: 50px;
                        transition: transform 0.2s;
                    }
                    .icon-link img:hover {
                        transform: scale(1.1);
                    }
                `}
            </style>
        </section>
    );
};

export default Contact;