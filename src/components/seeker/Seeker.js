// Import React
import React , {useContext , useEffect} from 'react';

// Import axios
import axios from 'axios';

// Import AppContext
import {AppContext} from '../provider/provider.js';

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
     const [searchState , setSearchState] = useContext(AppContext);

     // Request poke api
     const reqPokeApi = async (e) =>{
          if(e === ''){
               setSearchState({
                    error: false,
                    reqStatus: false
               });
          }else{
               try{
                    const result = await API.get(isNaN(e) ? e.toLowerCase() : e);
                    const {name , abilities , moves , types , stats , id} = result.data;
     
                    // Update the information of the pokemon found
                    setSearchState({
                         id,
                         reqStatus: true,
                         error: false,
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
                    setSearchState({
                         error: true
                    });
               }
          }
     }

     return(
          <div className='seeker-component'>
               <input 
                    className = 'pokemon-to-search'
                    type = 'text'
                    placeholder = 'Pokémon name or ID'
                    onChange={(e) => reqPokeApi(e.target.value)}
               />
               <FontAwesomeIcon className='search-icon' icon={faSearch} />
          </div>   
     );
}

// Export Seeker Component
export default Seeker;