import React from 'react'
import Img from '../images/1.png'
import Alumi from './Alumi'
function Home() {
  return (
    <>
    <div className='home-main'>
      <div className='home-container'>
      <div className='home-sidebar' >
        <div className='home-img'>
          <img src={Img} alt='img' />
        </div>
        <div className='home-div-1'>
        <h1>Learnn all IT Courses <br/> from IT Experts</h1>
        <button className='home-btn'>ENROLL NOW</button>
        </div>
      </div>
      </div> 
    </div>
    <Alumi/>
    </>
  )
}

export default Home