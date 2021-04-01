// Import react
import {createContext , useState} from 'react';

export default ({ children }) =>{
    // Set initial provier state
    const [state,setState] = useState({
        loading: false,
        reqStatus: false,
        error: false
    });

    return (            
            <AppContext.Provider value={[state,setState]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();