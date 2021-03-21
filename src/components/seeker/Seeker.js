// Import React
import React , {useState} from 'react';

// Import Axios
import axios from 'axios';

// Import images
//import charmander from '../../assets/img/charmander.png';
//import charizard from '../../assets/img/charizard.png';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";

// Import Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Seeker Component
const Seeker = () =>{

     // Pokemon API URL
     const API = axios.create({
          baseURL: 'https://pokeapi.co/api/v2/pokemon/'
     });

     // Search state
     const [searchValue , setSearchValue] = useState(null);

     // Request poke api
     const reqPokeApi = async () =>{
          const result = await API.get(searchValue);
          console.log(result.data.name);
     }

     // Seeker animation
     const setPokeballAnimation = () =>{
          document.querySelector('.pokemon-to-search').style.width = '60%';
     }

     const deletePokeballAnimation = () =>{
          document.querySelector('.pokemon-to-search').style.width = '40%';
     }

     return(
          <div className='seeker-component'>
               <input 
                    className = 'pokemon-to-search'
                    type = 'text'
                    placeholder = 'Pokemon :  Name / ID'
                    onMouseEnter={() => setPokeballAnimation()}
                    onMouseLeave={() => deletePokeballAnimation()} 
                    onChange={(e) => setSearchValue(e.target.value)}
               />
               <Animated animationIn='bounceIn infinite' animationOut='tada' animationInDuration={3000} animationOutDuration={1500} isVisible={true}>
                    <FontAwesomeIcon className='search-icon' icon={faSearch} onClick={() => reqPokeApi()} />
               </Animated>
          </div>   
     );
}

// Export Seeker Component
export default Seeker;