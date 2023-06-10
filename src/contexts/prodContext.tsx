import { createContext, useContext }from 'react';
import { DATAs, ContextType } from '../DataShoes/DATA';

const ProdContext = createContext<ContextType>({} as ContextType)

export const useProd = () => useContext(ProdContext)

export const ProdProvider = ({children}) => {
    return(
        <ProdContext.Provider value={{ shoes: DATAs}}>
            {children}
        </ProdContext.Provider>
    )
}

export default ProdContext;