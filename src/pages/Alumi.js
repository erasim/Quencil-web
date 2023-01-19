/** @format */

import React, { useEffect, useState } from "react";

function Alumi() {
	const [usersdata, SetUsersdata] = useState([]);
	const users = () => {
		fetch("https://api.github.com/users")
			.then((response) => response.json())
			.then((json) => SetUsersdata(json));
	};
    useEffect(() => {
        // Update the document title using the browser API
        users();
      },[]);
	return (
	
    <div className="alumni">
			<div className='alumni-container'>
			<h1>Our Alumi Work in Top Companies</h1>
            <div className="alumni-box">
			{usersdata.map((item, i) => (
 <div key={i} className='card-box'>
    {
        i < 10 ? ( <div className="card" >
        <div className="card-body">
          <img src={item.avatar_url} alt='use-pic' />
          <h4 className="card-subtitle mb-2 text-muted">{item.login}</h4>
         
         
         
        </div>
      </div>

        ):(<></>

        )
    }

 </div>
 ))}
			</div>
            </div>
            </div>
	
	);
}

export default Alumi;
