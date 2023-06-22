import React, { useState } from 'react';
import About from './About';

const SourceComponent = ({ setIsNavOpen, setContent }) => {
  const handlePageClick = () => {
    setIsNavOpen(false);
    setContent(<About />);
  };

  return (
    <nav className='nav'>
      <button abc='def' className='btn_ul' onClick={handlePageClick}>Home</button>
      <button className='btn_ul' onClick={handlePageClick}>About</button>
      <button className='btn_ul' onClick={handlePageClick}>Gallery</button>
      <button className='btn_ul' onClick={handlePageClick}>Contact</button>
      <button className='btn_ul' onClick={handlePageClick}>Rate Us</button>
    </nav>
  );
};

const Nav = ({ setActivePage }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [content, setContent] = useState(null);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <span>
      <button className='menu_btn' onClick={handleNavToggle}>Menu</button>
      {isNavOpen && (
        <SourceComponent setIsNavOpen={setIsNavOpen} setContent={setContent} />
      )}
      {content}
    </span>
  );
};

export default Nav;







