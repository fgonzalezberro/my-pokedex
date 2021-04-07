// Import React
import React , {useState} from 'react';  

// Import images
import pichu from '../../assets/img/pichu.png';
import raichu from '../../assets/img/raichu.png';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";

// Import Fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
library.add(fab);

// Footer component
const Footer = () =>{
    // Footer image state
    const [footerImage , setImage] = useState({
        imageUrl : pichu,
        imageSize : 40,
        animationState : false
    });

    const today = new Date();
    const currentYear = today.getFullYear();

    // Footer hover animation
    const footerHover = () =>{
        setImage({
            imageUrl : raichu,
            imageSize : 50,
            animationState : true
        });
    }

    const footerLeave = () =>{
        setImage({
            imageUrl : pichu,
            imageSize : 40,
            animationState : false
        });
    }

    return(
        <footer onMouseEnter={() =>{footerHover()}} onMouseLeave={() => {footerLeave()}}>
            <p> 
                Developed by Francisco González

                <a href='https://github.com/fgonzalezberro'>
                    <FontAwesomeIcon
                        icon={['fab', 'github']} 
                        className='github-icon'
                    />
                </a>
                
                {currentYear} ©
            </p>

            <Animated animationIn='flash' animationOut='rubberBand' animationInDuration={1500} animationOutDuration={1500} isVisible={footerImage.animationState}>
                <img src={footerImage.imageUrl}  alt='Pokemon image' className='footer-image' style={{'width' : `${footerImage.imageSize}px`}}/>
            </Animated>
    </footer>
       
    );
}

// Export Footer Component
export default Footer;