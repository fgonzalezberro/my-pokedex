// Import React library
import React , {useContext} from 'react';

// Import AppContext
import {AppContext} from '../../application/provider.js';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";

// Import images
import pokedex from '../../assets/img/pokedex.png';
import masterball from '../../assets/img/masterball.png';

// Dashboard component
const Dashboard = () => {
    const [searchState , setSeatchState] = useContext(AppContext);

    return (
        <section className='dashboard'>
            <Animated animationIn='pulse infinite' animationOut='rubberBand' animationInDuration={3000} animationOutDuration={1500} isVisible={true}>
                <img className='master-ball'  src={masterball}  alt='Pokemon image'/>
            </Animated>
            {searchState.reqStatus ? <PokemonRestul searchState={searchState} />  : <EmptySearchMessage />}
        </section>
    );
};

 // Empty search message
 const EmptySearchMessage = () => (
    <div className='empty-message'>
        <p>No search has been made</p> 
        <Animated animationIn='flash infinite' animationOut='rubberBand' animationInDuration={5000} animationOutDuration={1500} isVisible={true}>
            <img  src={pokedex}  alt='Pokemon image'/>
        </Animated>
    </div>
 );

 // Pokemon search result
 const PokemonRestul = ({searchState}) => (
    <div className='pokemon-result'>
        <img src={searchState.image} alt='Poke image'/>
        <p>Nombre: {searchState.name.charAt(0).toUpperCase() + searchState.name.slice(1)}</p>
        <p>HP: {searchState.hp}</p>
        <p>Attack: {searchState.atk}</p>
        <p>Defense: {searchState.def}</p>
        <p>Special Attack: {searchState.specialAttack}</p>
        <p>Special Defense: {searchState.specialDefense}</p>
        <p>Speed: {searchState.speed}</p>
        <p>Principal ability: {searchState.ability}</p>
        <p>Principal move: {searchState.principalMove}</p>
        <p className={searchState.type} id='pokemon-type'>Type: {searchState.type.charAt(0).toUpperCase() + searchState.type.slice(1)}</p>
        <p>Pokemon ID: {searchState.id}</p>
    </div>
 );

export default Dashboard;