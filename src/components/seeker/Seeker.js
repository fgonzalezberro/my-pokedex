// Import React
import React from 'react';

// Import images
import pokeball from '../../assets/img/pokeball.png';

// Seeker Component
const Seeker = () =>{
     return(
          <div className='seeker-component'>
               <img className='pokeball-icon' src={pokeball}/>
               <input className = 'pokemon-to-search'
                    type = 'text'
                    placeholder = 'Buscar Pokemon'
               />
          </div>   
     );
}


// Export Seeker Component
export default Seeker;