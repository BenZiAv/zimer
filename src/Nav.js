import React, { useState } from 'react';
import About from './About';
import LoginForm from './Login';
import Gallery from './Gallery';
import Contact from './Contact';
import RateUs from './RateUs';

const images = [
  'https://my.weekend.co.il/Templates/customerimages/20524/gallery/image_20524_6be150a25cfb4f5fa11648fce41314f1.jpg',
  'https://my.weekend.co.il/Templates/customerimages/20524/gallery/image_20524_6219b79ab8fb494fac8f3861d2cc6a00.jpg',
  'https://zimmers-at-the-forest-villa-amirim.booked.co.il/data/Photos/OriginalPhoto/7767/776740/776740612/Zimmers-At-The-Forest-Amirim-Exterior.JPEG',
  // Add more image URLs here
];

const SourceComponent = ({ setIsNavOpen, setContent }) => {
  const handlePageClick = (buttonId) => {
    setIsNavOpen(false);
    
    switch (buttonId) {
      case 'login':
        setContent(<span className='login'><LoginForm/></span>);
        break;
      case 'about':
        setContent(<span className='about'><About/></span>);
        break;
      case 'gallery':
        setContent(<span className='gallery'><Gallery images={images} /></span>);
        break;
      case 'contact':
        setContent(<span className='contact'><Contact/></span>);
        break;
      case 'rate_us':
        setContent(<span><RateUs/></span>);
        break;
      default:
        setContent(null);
        break;
    }
  };

  return (
    <nav className='nav'>
      <button id='login' className='btn_ul' onClick={() => handlePageClick('login')}>
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