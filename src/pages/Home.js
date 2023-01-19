import React from 'react'
import Img from '../images/1.png'
import Alumi from './Alumi'
import CaseStudy from './CaseStudy'
import Founder from './Founder'
import Placement from './Placement'
import Whyjoin from './Whyjoin'
function Home() {
  return (
    <>
    <div className='home-main'>
      <div className='home-container'>
      <div className='home-sidebar' >

        <div className='home-child1'>
          <img src={Img} alt='img' className='home-img' />
        </div>

        <div className='home-child2'>
        <h1>Learnn all IT Courses <br/> from IT Experts</h1>
        <button className='home-btn'>ENROLL NOW</button>
        </div>


      </div>
      </div> 
    </div>
     <Whyjoin/>
   <CaseStudy/>
   <Placement/> 
    <Alumi/> 
    <Founder/>
    
    
    
    </>
  )
}

export default Home