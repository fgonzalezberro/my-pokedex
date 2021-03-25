// Import React library
import React , {useContext} from 'react';

// Import AppContext
import {AppContext} from '../provider/provider.js';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";

// Import react icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRocket, faMeteor, faShieldAlt, faShieldVirus, faBolt, faRunning, faIdCardAlt, faBomb, faViruses} from '@fortawesome/free-solid-svg-icons'

// Import images
import snorlax from '../../assets/img/snorlax.png';
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

            <div className='data-dashboard'>
                {searchState.reqStatus ? <PokemonRestul searchState={searchState} />  : <EmptySearchMessage searchState={searchState}/>}
            </div>
        </section>
    );
};

 // Empty search message
 const EmptySearchMessage = ({searchState}) => (
    <div className='empty-message'>
        <img  src={searchState.error ? lostSearch : snorlax}  alt='Pokemon image'/>
        {searchState.error ? <p>Pokémon not found.</p> : <p>No search has been made.</p> }
    </div>
 );

 // Pokemon search result
 const PokemonRestul = ({searchState}) => (
    <div className='pokemon-result'>
        <div className='pokemon-result-data'>
            <p className='pokemon-result-name'>{searchState.name.charAt(0).toUpperCase() + searchState.name.slice(1)}</p>
            <img src={searchState.image} alt='Poke image'/>
            <p><FontAwesomeIcon icon={faIdCardAlt}/> Pokemon ID: {searchState.id}</p>
        </div>
        
        <div className='pokemon-result-attributes'>
            <div className='pokemon-result-attributes-container'>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faHeart}/> HP: {searchState.hp}</p>
                    <progress className={searchState.type} value={searchState.hp} max='120'>{searchState.hp}</progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faRocket}/> Attack: {searchState.atk}</p>
                    <progress value={searchState.atk} max='120'></progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faShieldAlt}/> Defense: {searchState.def}</p>
                    <progress value={searchState.def} max='120'></progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faMeteor}/> Special Attack: {searchState.specialAttack}</p>
                    <progress value={searchState.specialAttack} max='120'></progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faShieldVirus}/> Special Defense: {searchState.specialDefense}</p>
                    <progress value={searchState.specialDefense} max='120'></progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faBolt}/> Speed: {searchState.speed}</p>
                    <progress value={searchState.speed} max='120'></progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faViruses}/> Type: <span className={searchState.type} id='pokemon-type'>{searchState.type.charAt(0).toUpperCase() + searchState.type.slice(1)}</span></p>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faRunning}/> Principal move: {searchState.principalMove.charAt(0).toUpperCase() + searchState.principalMove.slice(1)}</p>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faBomb}/> Principal ability: {searchState.ability.charAt(0).toUpperCase() + searchState.ability.slice(1)}</p>
                </div>
            </div>
        </div>
    </div>
 );

export default Dashboard;