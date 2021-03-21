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

     // Search value
     const [searchValue , setSearchValue] = useState(null);

     // Search state
     const [searchState , setSeatchState] = useState({
          reqStatus: false
     });

     // Request poke api
     const reqPokeApi = async () =>{
          try{
               const result = await API.get(searchValue);
               console.log(result.data);
               const {name , abilities , moves , types , stats , id} = result.data;

               // Update the information of the pokemon found
               setSeatchState({
                    id,
                    reqStatus: true,
                    hp: stats[0].base_stat,
                    atk: stats[1].base_stat,
                    def: stats[2].base_stat,
                    specialAttack: stats[3].base_stat,
                    specialDefense: stats[4].base_stat,
                    speed: stats[4].base_stat,
                    name,
                    ability: abilities[0].ability.name,
                    principalMove: moves[0].move.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                    type: types[0].type.name
               });
          }
          catch(e){
               console.log(e.request.status);
          }
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
                    placeholder = 'Pokémon ( Name or ID )'
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