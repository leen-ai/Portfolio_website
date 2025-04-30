import React from 'react';
import justMe from '../just_me.jpg'; 

const About = () => {
    return (
        <section id="about">
            <h2 style={{ textAlign: 'center' }}>About Me</h2>
            <div className="about-container">
                <div className="about-photo">
                    <img src={justMe} alt="Your Name" />
                </div>
                <div className="about-description">
                    <p>
                        Hi! I'm Lee Ann Tabanao, a current learner with a passion for the ever-evolving world of IT. 
                        I'm constantly seeking new knowledge and skills to expand my expertise in programming and web development, 
                        and I enjoy tackling new challenges. I'm driven by a desire to use my skills to improve my experience, 
                        solve complex technical problems, and contribute to a meaningful project.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;