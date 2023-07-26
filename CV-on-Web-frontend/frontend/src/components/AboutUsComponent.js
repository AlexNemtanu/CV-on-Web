
import React from 'react';
import styles from './HomeComponent.module.css';
const AboutUsComponent = () => {
    return (
        <div className="container">
            <div className="row">
                
                <div className="col-md-6">
                    
                    <img src={process.env.PUBLIC_URL + '/Banchet_D (530).jpg'}
                     alt="jmek"
                     style={{ width: '350px', height: 'auto' }} />
                    
                    <div>
                        <p>Email: alexnemtanu12@yahoo.com</p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/nemtanualexandru/">www.linkedin.com/in/nemtanualexandru/</a></p>
                        <p>GitHub: <a href="https://github.com/AlexNemtanu">github.com/AlexNemtanu</a></p>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <h1>Alexandru-Vasile Nemțanu</h1>
                    <p>
                        I'm Alex, a student passionate about problem-solving and technology, currently pursuing a Bachelor's degree in Computer and Information Science at Technical University of Cluj-Napoca. 
                    Seeking opportunities to apply my knowledge and contribute to exciting projects in the field of computer science.
                    Constantly expanding my knowledge through self-learning and staying up-to-date with the latest industry trends.
                    
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsComponent;
