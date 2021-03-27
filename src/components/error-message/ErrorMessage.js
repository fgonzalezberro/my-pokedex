// Import react
import React from 'react';

// Import images
import searchError from '../../assets/img/lost-search.png';


function ErrorMessage(props) {
    return (
        <div className='error-message'>
            <img  src={searchError}  alt='Pokemon image'/>
            <p>Pokémon not found.</p>
        </div>
    );
}

export default ErrorMessage;