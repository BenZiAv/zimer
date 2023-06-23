import React, { useState } from 'react';
import About from './About';

const SourceComponent = ({ setIsNavOpen, setContent }) => {
  const handlePageClick = (buttonId) => {
    setIsNavOpen(false);
    
    switch (buttonId) {
      case 'login':
        setContent(<div>Login Content</div>);
        break;
      case 'about':
        setContent(<About />);
        break;
      case 'gallery':
        setContent(<div>Gallery Content</div>);
        break;
      case 'contact':
        setContent(<div>Contact Content</div>);
        break;
      case 'rate_us':
        setContent(<div>Rate Us Content</div>);
        break;
      default:
        setContent(null);
        break;
    }
  };

  return (
    <nav className='nav'>
      <button id='login' className='btn_ul' onClick={() => handlePageClick('home')}>
        Login
      </button>
      <button id='about' className='btn_ul' onClick={() => handlePageClick('about')}>
        About
      </button>
      <button id='gallery' className='btn_ul' onClick={() => handlePageClick('gallery')}>
        Gallery
      </button>
      <button id='contact' className='btn_ul' onClick={() => handlePageClick('contact')}>
        Contact
      </button>
      <button id='rate_us' className='btn_ul' onClick={() => handlePageClick('rate_us')}>
        Rate Us
      </button>
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







