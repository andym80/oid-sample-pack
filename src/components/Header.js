import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          {/* Your logo or website name */}
          <h1>My Sound Sample Store</h1>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
