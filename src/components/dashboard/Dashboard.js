// Import React library
import React , {useContext} from 'react';

// Import AppContext
import {AppContext} from '../../application/provider.js';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";

// Import images
import pikachuDetective from '../../assets/img/pikachu-detective.png';
import masterball from '../../assets/img/masterball.png';
import lostSearch from '../../assets/img/lost-search.png';

// Dashboard component
const Dashboard = () => {
    const [searchState , setSeatchState] = useContext(AppContext);

    return (
        <section className='dashboard'>
            <Animated animationIn='pulse infinite' animationOut='rubberBand' animationInDuration={3000} animationOutDuration={1500} isVisible={true}>
                <img className='master-ball'  src={masterball}  alt='Pokemon image'/>
            </Animated>
            {searchState.reqStatus ? <PokemonRestul searchState={searchState} />  : <EmptySearchMessage searchState={searchState}/>}
        </section>
    );
};

 // Empty search message
 const EmptySearchMessage = ({searchState}) => (
    <div className='empty-message'>
        <img  src={searchState.error ? lostSearch : pikachuDetective}  alt='Pokemon image'/>
        {searchState.error ? <p>Pokémon not found.</p> : <p>No search has been made.</p> }
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
        <p>Principal ability: {searchState.ability.charAt(0).toUpperCase() + searchState.ability.slice(1)}</p>
        <p>Principal move: {searchState.principalMove.charAt(0).toUpperCase() + searchState.principalMove.slice(1)}</p>
        <p className={searchState.type} id='pokemon-type'>Type: {searchState.type.charAt(0).toUpperCase() + searchState.type.slice(1)}</p>
        <p>Pokemon ID: {searchState.id}</p>
    </div>
 );

export default Dashboard;