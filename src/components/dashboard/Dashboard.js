// Import React library
import React from 'react';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";

// Import images
import pokeball from '../../assets/img/pokeball.png';

// Dashboard component
const Dashboard = () => {
    return (
        <section className='dashboard'>
            <EmptySearchMessage />
        </section>
    );
};

 // Empty search message
 const EmptySearchMessage = () => (
    <div className='empty-message'>
        <p>No se ha buscado ningun Pokémon</p> 
        <Animated animationIn='flash infinite' animationOut='rubberBand' animationInDuration={5000} animationOutDuration={1500} isVisible={true}>
            <img  src={pokeball}  alt='Pokemon image'/>
        </Animated>
    </div>
 );

export default Dashboard;