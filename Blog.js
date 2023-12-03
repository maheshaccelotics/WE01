import React from 'react';
import './blog.css';
import Navbar from './navbar';

const Blog = () => {
  return (
    <>
    <div className='nav'>
    <Navbar/>
    </div>
    <div className="theory">
      <div className="welcome">
        <h1 className='head'>Welcome to Accelotics</h1>
        <p>
          Accelotics is one of the active start-ups growing with impeccable results. Accelotics will never <br/>compromise on the standards and quality of the user needs. The team of Accelotics will strive to meet the<br/> disciplines of the company.
        </p>
      </div>
      <div className="mission">
        <h1 className='head-one'>OUR MISSION & VISION</h1>
        <p>
          Our mission is to help enterprises accelerate the adoption of new technologies, untangle complex issues that<br/> always emerge during digital evolution, and orchestrate ongoing innovation. Whether it is a consumer-oriented <br/>app or a transformative enterprise-class solution, the company leads the process from ideation and concept <br/>to delivery and provides ongoing support.
        </p>
      </div>
      <div className="picture">
       <img src = "https://static.wixstatic.com/media/cf7615_f5196bb8c5204266ae0312b9e85a3b24~mv2.jpg/v1/crop/x_234,y_0,w_1752,h_1752/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4x6-----1_1.jpg"/>
      </div>
      <div>
        <h1 className='name'>BHAVESH ASANABADA</h1>
        <p className='designation'>Chief Executive Officer <br/>Software Developer</p>
      </div>
      <div className="message">
        <h1 className='head-two'>CEO MESSAGE</h1>
        <p className="para_one">
          Many years ago, as a young man, I dreamt of an opportunity that will afford people,<br/> regardless of age, gender, socio-economic status, and educational background the<br/> opportunity to realize their life dreams. I was an idealist; I had always believed that <br/>good things are in store for those who are willing to work hard for their dreams.<br/> Although my environment inculcated to my young minds that such was just a myth <br/>and opportunities of that kind didn't exist, I lead on to my hopes.
        </p>
        <p className="para_two">
          Then one day, I stumbled upon this industry called Software Enterprise and <br/>Marketing. As I said "eureka!", I excitingly embarked on the journey of my life. The<br/> dreamer in me, who was yearning for an opportunity to realize my full potential,<br/> found its home. This industry continues to amaze me, with its power to breach <br/>cultural, religious, social, and political barriers and be an equalizer of statuses, it <br/>empowers people to change their lives and their environment.
        </p>
      </div>
    </div>
     </>
  );
}

export default Blog;
