// Import React library
import React , {useContext} from 'react';

// Import AppContext
import {AppContext} from '../provider/provider.js';

// Import Animated CSS plugin
import {Animated} from "react-animated-css";


// Import Components
import ErrorMessage from '../error-message/ErrorMessage';
import EmptyMessage from '../empty-message/EmptyMessage';
import ResponseData from '../response-data/ResponseData';

// Import images
import pokeball from '../../assets/img/pokeball.png';
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
    const {reqStatus , error} = searchState;

    return (
        <section className='dashboard'>
            <Animated animationIn='pulse infinite' animationOut='rubberBand' animationInDuration={3000} animationOutDuration={1500} isVisible={true}>
                <img className='master-ball' src={pokeball} alt='Pokemon image'/>
            </Animated>

            <div className='data-dashboard'>
                {reqStatus ? <ResponseData />  : <DashboardMessage error={error}/>}
            </div>
        </section>
    );
};

 // Dashboard message
 const DashboardMessage = ({error}) => (
    error ? <ErrorMessage /> : <EmptyMessage />
 );

export default Dashboard;