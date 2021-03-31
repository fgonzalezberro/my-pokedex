// Import react library
import React from 'react';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";

// Import images
import pokeballLoader from '../../assets/img/pokeball-loader.png';

const Loader = () => {
    return (
        <div className='loader'>
            <Animated animationIn='wobble infinite' animationInDuration={1000} animationOutDuration={1500} isVisible={true}>
                <img src={pokeballLoader} alt='loading'/>
            </Animated>
            <p>Loading ...</p> 
        </div>
    );
};

export default Loader;