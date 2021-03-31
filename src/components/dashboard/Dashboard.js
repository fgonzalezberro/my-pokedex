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
import Loader from '../loader/Loader.js';

// Import images
import pokeball from '../../assets/img/pokeball.png';

// Dashboard component
const Dashboard = () => {
    const [searchState , setSeatchState] = useContext(AppContext);

    // Destructuring object
    const {reqStatus , error, loading} = searchState;

    return (
        <section className='dashboard'>
            <Animated animationIn='pulse infinite' animationOut='rubberBand' animationInDuration={3000} animationOutDuration={1500} isVisible={true}>
                <img className='master-ball' src={pokeball} alt='Pokemon image'/>
            </Animated>

            <div className='data-dashboard'>
                {loading ? <Loader /> : reqStatus ? <ResponseData />  : <DashboardMessage error={error}/>}
            </div>
        </section>
    );
};

 // Dashboard message
 const DashboardMessage = ({error}) => (
    error ? <ErrorMessage /> : <EmptyMessage />
 );

export default Dashboard;