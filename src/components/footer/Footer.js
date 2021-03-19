// Import React
import React from 'react';  

// Import images
import pichu from '../../assets/img/pichu.png';

// Import Fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
library.add(fab);

// Footer component
const Footer = () =>{
    const today = new Date();
    const currentYear = today.getFullYear();

    return(
        <footer>
            <p> 
                Developed by Francisco González 
                <FontAwesomeIcon
                    icon={['fab', 'github']} 
                    className='github-icon'
                 />
                 {currentYear} ©
            </p>
            
            <img 
              src={pichu} 
              alt='Pichu image'
              className='pichu-image'
            />
        </footer>
    );
}

// Export Footer Component
export default Footer;