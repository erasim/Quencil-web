import React from 'react'
import founderPic from '../images/pic-founder.jpeg'

function Founder() {
  return (
    <div className='founder-main'>
        <div className='founder-container'>
            <div className='founder-h1'>

  </div>
  
 
  <div className='founter-detail'>
<div className='founder-heading'>
    <h1>Meet our Founder</h1>
    <p>Our found Mr. Kunal Sharma has designed and delivered the Quencil Java full stack Developer (JFSD) course,
         which is a 1000+ over comprehensive, intensive, immersive, 
        Edutainment based 360* skills program and is a full one-stop solution to pursue your IT professional goal.</p>
        <p>The Quencil (JFSD) program is structured as a hand-on case study and real-time project based learning approach that will enable
             every trained aspriant to improve their analytical and problem solving skill by structuring, designing, coding, testing,
             and developing end to end. Software solution to real-time scenario using the modeling and DevOps concepts.</p>
             <button className='founder-btn'>LEARN MORE</button>
</div>
<div className="founder-card" >
        <div className="founder-card-body">
          <img src={founderPic} alt='use-pic' className='founder-card-img' />
         
         
         
         
        </div>
      </div>
  </div>
  </div>
    </div>
  )
}

export default Founder