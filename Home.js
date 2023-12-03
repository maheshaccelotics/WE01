import React from 'react';
import './Home.css'
import Navbar from './navbar';


function Home() {
  return (
    <div className="container">
      <Navbar/>
      <center>
        <div className="solution_head">
          <h1>SOFTWARE SOLUTIONS DEVELOPMENT WITH <br /> THE LATEST TECHNOLOGIES</h1>
          <p>Today, every business faces the challenge of performing Digital Transformation.
            Whether you aim to use AR to simplify <br/> a part of your value chain or create an IoT
            ecosystem with Smart Contracts, our engineers <br/>know all key tech stacks needed to
            help you in this way. Accelotics has been <br/>leveraging emerging technologies to help
            our clients with impactful, enterprise-wide software solutions.</p>
        </div>
        <div className="enterprise">
          <h1>ENTERPRISE SOFTWARE SOLUTIONS<br />POWERED BY THE LATEST TECH</h1>
          <p>From the manufacturing line to the meeting room, our software
            development solutions will help you elevate your <br/>Enterprise Core and overcome the challenges of
            technological transformation both in daily and large-scale operations.</p>
        </div>
        <div className="center"style={{display:'grid',gridTemplateColumns:'20% 20% 20% 20%',gridColumnGap:"2px"}}>
          <div className="about">
            <h1 className="about-hover">A B O U T</h1>
            <p className='about-text'>This is a great place to tell <br /> your story and give people<br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
          <div className="about">
            <h1 className="about-hover">A B O U T</h1>
            <p className='about-text'>This is a great place to tell <br /> your story and give people <br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
          <div className="about">
            <h1 className="about-hover">A B O U T</h1>
            <p className='about-text'>This is a great place to tell <br /> your story and give people<br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
          <div className="about">
            <h1 className="about-hover">A B O U T</h1>
            <p className='about-text'>This is a great place to tell <br /> your story and give people<br /> more insight into who you <br /> are, what you do, and why <br /> it’s all about you.</p>
          </div>
        </div>
        <div className="development">
          <h1>SOFTWARE DEVELOPMENT<br /> PLATFORMS, TECHNOLOGIES & <br />LANGUAGES</h1>
          <p>Smart solutions are the core of all that we do at Technowall.
            Our experts are bringing you wide-ranging expertise in all the <br/>areas needed for a
            reliable software development solution that works across the board.</p>
        </div>
      </center>
      <div className="big_data">
        <h1>ENTERPRISE SOFTWARE DEVELOPMENT |<br /> BIG DATA | DATA ANALYTICS |<br /> CLOUD COMPUTING</h1>
        <div className='Pic'>
          <ul>
            <li>python</li>
            <li>java</li>
            <li>ruby</li>
          </ul>
        </div>
      </div>
      <div className="web">
        <h1> WEB DEVELOPMENT</h1>
        <div className='Picture'>
      </div>
      </div>
      <div className="mobile">
        <h1>MOBILE DEVELOPMENT</h1>
        <div className='Pic'>
        </div>
      </div>
      <div className="iot">
        <h1>IoT DEVELOPMENT</h1>
        <div className='Picture'>
      </div>
      </div>
      <div className="machine_learning">
        <h1>ARTIFICIAL INTELLIGENCE<br />&<br />MACHINE LEARNING</h1>
        <div className='Pic'>
      </div>
      </div>
      <div className="ar">
        <h1>AR & VR <br />DEVELOPMENT</h1>
        <div className='Picture'>
        </div>
      </div>
    </div>
  
  );
}

export default Home;
