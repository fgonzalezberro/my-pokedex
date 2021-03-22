// Import react
import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [state,setState] = useState({
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