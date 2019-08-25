import React from 'react';


const Card = (props)=>{
	const{name, email, id} = props;
	return (

		<div className='bg-light-green dib br4 pa1 ma1 grow ba shadow-5 hover-bg-green'>
		    <img alt ='robots'  src={`https://robohash.org/${id}?size=180x180`}/>
		    <div>
		       <h3 className=' tc' > {name}  </h3>
		       <p className=' tc'> {email}</p>
	        </div>
        </div>
		);
}

export default Card;