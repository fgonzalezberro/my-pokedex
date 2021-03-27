// Import React
import React from 'react';

// Import images
import charizard from '../../assets/img/charizard.gif';

const EmptyMessage = () => {
    return (
        <div className='empty-message'>
            <img src={charizard}  alt='Pokemon image'/>
            <p>No search has been made.</p>
        </div>
    );
};

export default EmptyMessage;