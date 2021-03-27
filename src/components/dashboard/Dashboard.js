// Import React library
import React , {useContext} from 'react';

// Import AppContext
import {AppContext} from '../provider/provider.js';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";

// Import react icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRocket, faMeteor, faShieldAlt, faShieldVirus, faBolt, faRunning, faIdCardAlt, faBomb, faViruses} from '@fortawesome/free-solid-svg-icons';

// Import Components
import ErrorMessage from '../error-message/ErrorMessage';
import EmptyMessage from '../empty-message/EmptyMessage';

// Import images
import pokeball from '../../assets/img/pokeball.png';
import fire from '../../assets/img/attributes-img/fire-type.png';
import bug from '../../assets/img/attributes-img/bug-type.webp';
import dark from '../../assets/img/attributes-img/dark-type.png';
import dragon from '../../assets/img/attributes-img/dragon-type.webp';
import electric from '../../assets/img/attributes-img/electric-type.webp';
import fairy from '../../assets/img/attributes-img/fairy-type.webp';
import fighting from '../../assets/img/attributes-img/fighting-type.png';
import flying from '../../assets/img/attributes-img/flying-type.webp';
import ghost from '../../assets/img/attributes-img/ghost-type.png';
import grass from '../../assets/img/attributes-img/grass-type.webp';
import ground from '../../assets/img/attributes-img/ground-type.webp';
import ice from '../../assets/img/attributes-img/ice-type.webp';
import normal from '../../assets/img/attributes-img/normal-type.webp';
import poison from '../../assets/img/attributes-img/poison-type.webp';
import psychic from '../../assets/img/attributes-img/psychic-type.png';
import rock from '../../assets/img/attributes-img/rock-type.webp';
import steel from '../../assets/img/attributes-img/steel-type.webp';
import water from '../../assets/img/attributes-img/water-type.webp';

// Dashboard component
const Dashboard = () => {
    const [searchState , setSeatchState] = useContext(AppContext);

    // Destructuring object
    const {id, hp, atk, def, specialAttack, specialDefense, speed, name, ability, principalMove, type} = searchState;

    return (
        <section className='dashboard'>
            <Animated animationIn='pulse infinite' animationOut='rubberBand' animationInDuration={3000} animationOutDuration={1500} isVisible={true}>
                <img className='master-ball'  src={pokeball}  alt='Pokemon image'/>
            </Animated>

            <div className='data-dashboard'>
                {searchState.reqStatus ? <PokemonRestul searchState={searchState} />  : <DashboardMessage searchState={searchState}/>}
            </div>
        </section>
    );
};

 // Empty search message
 const DashboardMessage = ({searchState}) => (
    searchState.error ? <ErrorMessage /> : <EmptyMessage />
 );

 // Pokemon search result
 const PokemonRestul = ({searchState}) => (  
    <div className='pokemon-result'>
        <div className='pokemon-result-data'>
            <div className='pokemon-name'>
                <p className='pokemon-result-name'>{searchState.name.charAt(0).toUpperCase() + searchState.name.slice(1)}</p>
            </div>

            <div className='pokemon-image'>
                <Animated animationIn='zoomIn' animationOut='heartBeat' animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                    <img src={searchState.image} alt='Poke image'/>
                </Animated>

                <img className='pokemon-attribute-ico' src={fire}/>
            </div>

            <div className='pokemon-id'> 
                <p>ID: {searchState.id}</p>
            </div>
        </div>
        
        <div className='pokemon-result-attributes'>
            <div className='pokemon-result-attributes-container'>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faHeart}/> HP: {searchState.hp}</p>
                    <progress className={searchState.type} value={searchState.hp} max='160'>{searchState.hp}</progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faRocket}/> Attack: {searchState.atk}</p>
                    <progress value={searchState.atk} max='160'></progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faShieldAlt}/> Defense: {searchState.def}</p>
                    <progress value={searchState.def} max='160'></progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faMeteor}/> Special Attack: {searchState.specialAttack}</p>
                    <progress value={searchState.specialAttack} max='160'></progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faShieldVirus}/> Special Defense: {searchState.specialDefense}</p>
                    <progress value={searchState.specialDefense} max='160'></progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faBolt}/> Speed: {searchState.speed}</p>
                    <progress value={searchState.speed} max='160'></progress>
                </div>
                <div className='pokemon-attribute'>
                    <p><FontAwesomeIcon icon={faViruses}/> Type: <span className={`${searchState.type} pokemon-type`}>{searchState.type.charAt(0).toUpperCase() + searchState.type.slice(1)}</span></p>
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