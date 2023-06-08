import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;