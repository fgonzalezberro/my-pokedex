// Import React
import React , {useState} from 'react';

// Import images
import pokeball from '../../assets/img/pokeball.png';
import charmander from '../../assets/img/charmander.png';
import charizard from '../../assets/img/charizard.png';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";


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
          document.querySelector('.pokeball-icon').style.width = '60px';
          document.querySelector('.pokemon-to-search').style.width = '60%';
     }

     const deletePokeballAnimation = () =>{
          setImage({
               image: charmander,
               size: 50,
               statusAnimation: false
          });
          document.querySelector('.pokeball-icon').style.width = '20px';
          document.querySelector('.pokemon-to-search').style.width = '40%';
     }

     return(
          <div className='seeker-component'>
               <Animated animationIn='bounceIn' animationOut='rubberBand' animationInDuration={1500} animationOutDuration={1500} isVisible={imgState.statusAnimation}>
                    <img className='poke-icon' src={imgState.image} style={{'width': `${imgState.size}px`}}/>
               </Animated>
               <input className = 'pokemon-to-search'
                    type = 'text'
                    placeholder = 'Buscar Pokemon'
                    onMouseEnter={() => setPokeballAnimation()}
                    onMouseLeave={() => deletePokeballAnimation()}
               />
               <Animated animationIn='wobble' animationOut='fadeIn' animationInDuration={2000} animationOutDuration={1000} isVisible={imgState.statusAnimation}>
                    <img className='pokeball-icon' src={pokeball}/>
               </Animated>
          </div>   
     );
}


// Export Seeker Component
export default Seeker;