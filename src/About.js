import React from 'react';

const About = ({ activePage }) => {
    
    return (
        <div>
            <h1 className='h1_about'>About Us</h1>
            <h3>We located in Osafiya, very beautiful and quiet area</h3>
            <h3>We have 2 couples units and 1 family units</h3>
            
            <h1>Ben Avnilov</h1>
            <h4>Email : <a href="mailto:benavnilov@gmail.com">benavnilov@gmail.com</a></h4>
            <h4>Phone : <a href="+972507744439">+972507744439</a></h4>

            <h1>Yamen Sray Aldin</h1>
            <h4>Email : <a href="mailto:y.s.aldin@gmail.com">y.s.aldin@gmail.com</a></h4>
            <h4>Phone : <a href="tel:+972525327377">+972525327377</a></h4>   
        </div>
    );
};

export default About;
