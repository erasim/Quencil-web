import React from 'react'
import WhyjoinPic from '../images/7.png'

function Whyjoin() {
  return (
    <div className='whyjoin-main'>
    <div className='whyjoin-container'>
        <div className='whyjoin-h1'>

</div>


<div className='whyjoin-detail'>
<div className='whyjoin-heading'>
<h1>Why should you join Quencil?</h1>
<p>No matter what it takes! we will power you if you have the confidence And willingness to study coding.</p>
    <p>IIT and Stanford Alumni created the content. instant 1:1 solution of doubts.</p>

         <p>Each course includes 100 + problems and 10 + projects for Hand on learning.</p>
         {/* <button className='whyjoin-btn'>LEARN MORE</button> */}
</div>
<div className="whyjoin-card" >
    <div className="whyjoin-card-body">
      <img src={WhyjoinPic} alt='use-pic' className='whyjoin-card-img' />
  
     
     
     
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Whyjoin