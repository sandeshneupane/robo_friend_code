import React from 'react';
import Card from './Card';


const Cardlist = ({robot})=>{

	return(
		<div className='hover-bc-red'>
           {
			 robot.map((val,i)=>{
				return (
					<Card 
					key={i} 
					id={robot[i].id} 
					name={robot[i].name} 
					email={robot[i].email}
					/>
				);
			 })
			}
		</div>
	    );

}
export default Cardlist;