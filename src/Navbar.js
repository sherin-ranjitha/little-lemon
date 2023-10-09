import React from 'react';

function Navbar() {
    const liStyle = {
        display: 'inline-block',
        margin: '0 10px', // Adjust the margin as needed for spacing
      };
  return (
    <nav>
      <ul>
       <li style={liStyle}><img src='Little Lemon.png'/></li>
        <li style={liStyle}><a href="/">Home</a></li>
        <li style={liStyle}><a href="/about">About</a></li>
        <li style={liStyle}><a href="/menu">Menu</a></li>
        <li style={liStyle}><a href="/testimonials">Testimonials</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
