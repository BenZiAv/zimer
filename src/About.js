import React from 'react';

const About = ({ activePage }) => {
    if (activePage !== 'About') {
      return null; // Render nothing if active page is not 'about'
    }

    return (
        <div>
            <h1 className='about'>Who Are we</h1>
        </div>
    );
};

export default About;
