import React, { useState } from 'react';
import HomePage from './HomePage';
import About from './About';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  const handlePageClick = (page) => {
    // eslint-disable-next-line no-undef
    setActivePage(page);
    setIsNavOpen(false);
  };

  return (
    <div>
      <button className='menu_btn' onClick={handleNavToggle}>Menu</button>
      {isNavOpen && (
        <nav className='nav'>
          <ul className='ul'>
            <li onClick={handlePageClick}>Home</li>
            <li onClick={handlePageClick}>About</li>
            <li onClick={handlePageClick}>Services</li>
            <li onClick={handlePageClick}>Contact</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Nav;