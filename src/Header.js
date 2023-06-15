import React from 'react';
import Nav from './Nav';
import About from './About';

const Header = (props) => {
  return <div>
    <header className={props.className}>ZIMER</header>
    <Nav/>
  </div>;
};

export default Header;