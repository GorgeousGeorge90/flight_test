import { createContext, FC, ReactNode, useState } from 'react';
import state from './../../state/state';
import { FlightType } from '../../modules/FlightsList/types/types';


type FlightsProps = {
    children:ReactNode,
}

type FlightContextType = {
    flights:FlightType[],
    airlines:string[],
    priceFromHigh:()=>void,
    priceFromLow:()=>void,
    sortByCarrier:(carrier:string) => void,
    sortByPrice:(min:string,max:string) => void,
    allFlights:()=>void,

}

export const FlightContext = createContext<FlightContextType | null>(null)

const FlightsWrapper:FC<FlightsProps> = ({children}) => {
    const [ flights,setFlights ] = useState<FlightType[]>(state)

    const airlines = flights.reduce((acc,item)=> {
         acc.push(item.carrier)

        return Array.from(new Set(acc))
    },[] as string[])

    const priceFromLow = () => {
        setFlights(state => {
            return [...state.sort((a, b) => a.price - b.price)]
        })
    }

    const priceFromHigh = () => {
        setFlights(state => {
            return [...state.sort((a, b) => b.price - a.price)]
        })
    }

    const sortByCarrier = (carrier:string) => {
        setFlights(state => {
            return state.filter(item => item.carrier === carrier)
        })
    }

    const sortByPrice = (min:string, max:string) => {
        setFlights(state => {
            return state.filter(item => item.price > +min && item.price < +max)
        })
    }

    const allFlights = () => setFlights(state)


    return (<FlightContext.Provider value={{
        flights,
        airlines,
        priceFromHigh,
        priceFromLow,
        sortByCarrier,
        sortByPrice,
        allFlights,
    }}>
        {children}
    </FlightContext.Provider>)
}

export default FlightsWrapper