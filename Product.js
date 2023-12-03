import React from 'react'
import './Product.css'
import Navbar from './navbar'

const Product = () => {
  return (
    <div className="bg-container">
        <div className="image-container">
        <div className='Nav'>
        <Navbar/>
        </div>
            <div className="text-container">
                <p className="product-title">PRODUCT ENGINEERING</p>
                <h1 className="enterprise-title">ENTERPRISE SOFTWARE<br />DEVELOPMENT</h1>
                <p className="para-content">Need a solid software foundation for your business? Uncoordinated mobile apps<br />
                    and software stress out your employees and impede your productivity? Leverage<br/>
                    our decade-long expertise in enterprise software development, API integration,
                    <br/> modernizing legacy systems, and consolidating app portfolios.
                </p>
            </div>

        </div>
        <div className="solutions-container">
            <h1 className="our-ent-heading">OUR ENTERPRISE <br/> SOFTWARE SOLUTIONS</h1>
            <p className="software-para">Your business needs a reliable enterprise software solution to support your many <br/> operations. It needs to scale, coordinate other software and mobile apps, <br/> incorporate advanced tech, and cover an extensive list of other objectives. <br/>
                Intellectsoft has the experience, tools, and technologies to create such demanding <br/> custom software.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'20% 20% 20% 20%',gridColumnGap:"75px"}}>
            <div className="hover-bg-container d-flex flex-column justify-content-center">
                <p className='para'>CUSTOM ENTERPRISE <br/>SOFTWARE DEVELOPMENT</p>
                <div className='text'>
                    <p>Support your business <br/>infrastructure with scalable <br/>software that improves key facets <br/>of your enterprise, from automation <br/>to employee collaboration. Leverage <br/>our decade-long expertise to build <br/>an enterprise software solution<br/> that solves a particular business<br/> objective in one of your <br/>departments.</p>
                </div>
            </div>
            <div className="hover-bg-container1 d-flex flex-column justify-content-center">
                <p className='para'>SOFTWARE INTEGRATION</p>
                <div className='text'>
                    <p>Enterprises like yours rely on well-coordinated SaaS and on-premise third-party applications. Improve your software infrastructure with well-built microservices, reliable API, and data integration. Launch your mobile strategy with our comprehensive enterprise application development, or use our enterprise app integration solutions.</p>
                </div>
            </div>
            <div className="hover-bg-container2 d-flex flex-column justify-content-center">
                <p className='para'>LEGACY APPLICATION MODERNIZATION</p>
                <div className='text'>
                    <p>Outdated enterprise applications often cause employees to spend more time working around limitations. Hire our team to perform an in-depth feature and technical analysis of your legacy solution and improve it with the latest tools and technologies. A well-built legacy solution will help your employees become more productive and satisfied.</p>
                </div>
            </div>
            <div className="hover-bg-container3 d-flex flex-column justify-content-center">
                <p className='para'>APPLICATION PORTFOLIO CONSOLIDATION</p>
                <div className='text'>
                    <p>Frequent mergers and acquisitions leave enterprises with a wide variety of uncoordinated software solutions. Our experts will help you consolidate, integrate, and refactor your enterprise software as necessary, moving them to modern software stacks and cloud hosting. You will streamline IT operations, minimize costs, and increase employee efficiency.</p>
                </div>
            </div>

            </div>
        
        <div className="latest-tech-container">
            <h1 className="latest-heading">THE LATEST TECH</h1>
            <p className="latest-tech-para">Intellectsoft always keeps track of new technologies to deliver advanced enterprise <br /> software solutions. The latest tech give you many crucial benefits, from the highest <br /> level of security with blockchain - to reliable automation with Artificial Intelligence <br /> based algorithms like machine learning.</p>
        </div>


        <div className="latest-tech-container">
            <h1 className="latest-heading">CAPABILITIES OF OUR ENTERPRISE <br/> SOFTWARE DEVELOPERS</h1>
            <p className="latest-tech-para">Our enterprise software developers have the knowledge, niche skills, and <br /> experience to build you a solid software solution.</p>
        </div>

        

    </div>
  )
}

export default Product