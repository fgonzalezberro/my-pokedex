// Import react library
import React , {useContext} from 'react';

// Import react icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRocket, faMeteor, faShieldAlt, faShieldVirus, faBolt, faRunning, faIdCardAlt, faBomb, faViruses} from '@fortawesome/free-solid-svg-icons';

// Import AppContext
import {AppContext} from '../provider/provider.js';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";

// Import image
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


const ResponseData = () => {
    const [searchState , setSeatchState] = useContext(AppContext);

    // Destructuring object
    const {id, hp, atk, def, specialAttack, specialDefense, speed, name, ability, principalMove, type, image} = searchState;

    // Icon Attribute to set
    const iconToSet =  (
                            type === 'bug' ? bug:
                            type === 'dark' ? dark:
                            type === 'fire' ? fire:
                            type === 'dragon' ? dragon:
                            type === 'fairy' ? fairy:
                            type === 'fighting' ? fighting:
                            type === 'flying' ? flying:
                            type === 'ghost' ? ghost:
                            type === 'grass' ? grass:
                            type === 'ground' ? ground:
                            type === 'ice' ? ice:
                            type === 'normal' ? normal:
                            type === 'poison' ? poison:
                            type === 'psychic' ? psychic:
                            type === 'rock' ? rock:
                            type === 'electric' ? electric:
                            type === 'steel' ? steel : water
                        );

    return (
        <div className='pokemon-response'>
            <div className='pokemon-response-data'>
                <div className='pokemon-name'>
                    <p className='pokemon-response-name'>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                </div>

                <div className='pokemon-image'>
                    <Animated animationIn='zoomIn' animationOut='heartBeat' animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                        <img src={image} alt='Pokemon image'/>
                    </Animated>

                    <img className='pokemon-attribute-ico' src={iconToSet}  />
                </div>

                <div className='pokemon-id'> 
                    <p>ID: {id}</p>
                </div>
            </div>
            
            <div className='pokemon-response-attributes'>
                <div className='pokemon-response-attributes-container'>
                    <div className='pokemon-attribute'>
                        <p><FontAwesomeIcon icon={faHeart}/> HP: {hp}</p>
                        <progress className={type} value={hp} max='160'>{hp}</progress>
                    </div>
                    <div className='pokemon-attribute'>
                        <p><FontAwesomeIcon icon={faRocket}/> Attack: {atk}</p>
                        <progress value={atk} max='160'></progress>
                    </div>
                    <div className='pokemon-attribute'>
                        <p><FontAwesomeIcon icon={faShieldAlt}/> Defense: {def}</p>
                        <progress value={def} max='160'></progress>
                    </div>
                    <div className='pokemon-attribute'>
                        <p><FontAwesomeIcon icon={faMeteor}/> Special Attack: {specialAttack}</p>
                        <progress value={specialAttack} max='160'></progress>
                    </div>
                    <div className='pokemon-attribute'>
                        <p><FontAwesomeIcon icon={faShieldVirus}/> Special Defense: {specialDefense}</p>
                        <progress value={specialDefense} max='160'></progress>
                    </div>
                    <div className='pokemon-attribute'>
                        <p><FontAwesomeIcon icon={faBolt}/> Speed: {speed}</p>
                        <progress value={speed} max='160'></progress>
                    </div>
                    <div className='pokemon-attribute'>
                        <p><FontAwesomeIcon icon={faViruses}/> Type: <span className={`${type} pokemon-type`}>{type.charAt(0).toUpperCase() + type.slice(1)}</span></p>
                    </div>
                    <div className='pokemon-attribute'>
                        <p><FontAwesomeIcon icon={faRunning}/> Principal move: {principalMove.charAt(0).toUpperCase() + principalMove.slice(1)}</p>
                    </div>
                    <div className='pokemon-attribute'>
                        <p><FontAwesomeIcon icon={faBomb}/> Principal ability: {ability.charAt(0).toUpperCase() + ability.slice(1)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponseData;