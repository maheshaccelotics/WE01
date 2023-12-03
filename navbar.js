import React from 'react';
import './Home'
import './navbar.css'

const Navbar = () => {
  return (
    
    <div className="link">
      <div className="head_content">
        <h1 className="main_head">Accelotics</h1>
        <p className="software_passage">software solutions</p>
      </div>
      <nav className="navbar">
        <ul>
          <li className='tech'><a href='/technologies'>Technologies</a></li>
          <li className='tech'><a href='/product'>Product Engineering</a></li>
          <li className='tech'><a href='/blog'>About Us</a></li>
        </ul>
      </nav>
    </div>
   
  );
}

export default Navbar;
