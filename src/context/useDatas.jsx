import { createContext , useEffect, useState } from "react";
import homeData from '../data/home-data.json'

export const DatasContext = createContext();

export function DataProvider({children}) {
    const [hData , setHData] = useState([]);
    const [dataLoaded , setDataLoaded] = useState(false)

    useEffect(() => {
        setHData(homeData)
        setTimeout(() => {
            setDataLoaded(true)
        }, 4000)
    }, []); 

    return (
        <DatasContext.Provider value={{
            hData,
            dataLoaded
        }}>
            {children}
        </DatasContext.Provider>
    )
}