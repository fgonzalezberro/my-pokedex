// Import React
import React from 'react';

// Import images
import pokeball from '../../assets/img/pokeball.png';

// Seeker Component
const Seeker = () =>{
     const setPokeballAnimation = () =>{
          document.querySelector('.pokeball-icon').style.width = '60px';
     }

     const deletePokeballAnimation = () =>{
          document.querySelector('.pokeball-icon').style.width = '40px';
     }

     return(
          <div className='seeker-component'>
               <img className='pokeball-icon' src={pokeball}/>
               <input className = 'pokemon-to-search'
                    type = 'text'
                    placeholder = 'Buscar Pokemon'
                    onMouseEnter={() => setPokeballAnimation()}
                    onMouseLeave={() => deletePokeballAnimation()}
               />
          </div>   
     );
}


// Export Seeker Component
export default Seeker;