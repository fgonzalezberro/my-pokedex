// Import React
import React , {useState} from 'react';

// Import images
import charmander from '../../assets/img/charmander.png';
import charizard from '../../assets/img/charizard.png';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";

// Import Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Seeker Component
const Seeker = () =>{
     // Image state
     const [imgState , setImage] = useState({
          image: charmander,
          size: 50,
          statusAnimation: false
     });

     const setPokeballAnimation = () =>{
          setImage({
               image: charizard,
               size: 90,
               statusAnimation: true
          });
          document.querySelector('.pokemon-to-search').style.width = '60%';
     }

     const deletePokeballAnimation = () =>{
          setImage({
               image: charmander,
               size: 50,
               statusAnimation: false
          });
          document.querySelector('.pokemon-to-search').style.width = '40%';
     }

     return(
          <div className='seeker-component'>
               <input 
                    className = 'pokemon-to-search'
                    type = 'text'
                    placeholder = 'Buscar Pokemon'
                    onMouseEnter={() => setPokeballAnimation()}
                    onMouseLeave={() => deletePokeballAnimation()} 
               />
               <Animated animationIn='bounceIn infinite' animationOut='tada' animationInDuration={3000} animationOutDuration={1500} isVisible={true}>
                    <FontAwesomeIcon className='search-icon' icon={faSearch} />
               </Animated>
               <Animated animationIn='bounceIn' animationOut='rubberBand' animationInDuration={1500} animationOutDuration={1500} isVisible={imgState.statusAnimation}>
                    <img className='poke-icon' src={imgState.image} style={{'width': `${imgState.size}px`}}/>
               </Animated>
          </div>   
     );
}


// Export Seeker Component
export default Seeker;