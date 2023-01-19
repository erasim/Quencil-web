import React from 'react'
import planning from '../images/2.jpg'
import analaysis from '../images/3.jpg'
import design from '../images/4.jpg'
import coding from '../images/5.jpg'
import devlopment from '../images/6.jpg'

function CaseStudy() {
  return (
    <div className='caseStudy-main'>
        <div className='caseStudy-heading'>
<h1>Case Studies & Projects</h1>
<p> SOLUTION TO REAL-TIME SECENARIOS ON BOTH CLIENT & SERVER SIDE</p>

         
</div>
        <div className='caseStudy-container'>
            <div className='caseStudy-img-div'>
                <img src={planning} alt='pic' className='caseStudy-img'/>
                <h5>PLANNING</h5>
            </div>
            <div className='caseStudy-img-div'>
                <img src={analaysis} alt='pic' className='caseStudy-img'/>
                <h5>REQUIREMENT ANALYSIS</h5>
            </div>
            <div className='caseStudy-img-div'>
                <img src={design} alt='pic' className='caseStudy-img'/>
                <h5>DESIGN & MODELING</h5>
            </div>
            <div className='caseStudy-img-div'>
                <img src={coding} alt='pic' className='caseStudy-img'/>
                <h5>CODING & UNIT TESTING</h5>
            </div>
            <div className='caseStudy-img-div'>
                <img src={devlopment} alt='pic' className='caseStudy-img'/>
                <h5>INTEGRATION & DEPLOYMENT</h5>
            </div>
          
        </div>
    </div>
  )
}

export default CaseStudy