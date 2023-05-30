import React from 'react';

const Header = () => {
  return (
    <div>
      <header>
      <img src="logo.png" alt="Logo" />
      <nav>
        <ul>
          <li><a href="/HomePage">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Zimmers">Zimmers</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
      {/* אלמנטים נוספים, לדוגמה כפתורי התחברות או חיפוש */}
    </header>
    </div>
  );
};

export default Header;
