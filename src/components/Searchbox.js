import React from 'react';

const Searchbox = ({searchfield, searchchange}) => {

return (
    <div className='pa2 ma3 '>
      <input 
        className=' tc pa2 ba b--green bg-lightest-blue' 
        type='search' 
        placeholder='Search Robot Here'
        onChange={searchchange}
       />

    </div>

	);

}

export default Searchbox;