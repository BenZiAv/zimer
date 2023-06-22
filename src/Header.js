import React from 'react';
import Nav from './Nav';


const Header = (props) => {
  return <div>
    <header className={props.className}>ZIMER</header>
    <Nav/>
  </div>;
};

export default Header;