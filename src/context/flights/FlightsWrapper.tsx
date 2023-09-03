import { createContext, FC, ReactNode, useContext, useState } from 'react';
import data from '../../data/data';
import { FlightType, FlightTypeEx } from '../../modules/FlightsList/types/types';
import StateService from '../../utils/StateService';


type FlightsProps = {
    children:ReactNode,
}

export type FlightContextType = {
    flights:FlightType[],
    flights_ex:FlightTypeEx[],
    airlines:string[],
    priceFromHigh:()=>void,
    priceFromLow:()=>void,
    sortByCarrier:(carrier:string) => void,
    sortByPrice:(min:string,max:string) => void,
    sortByStops:(param:boolean) => void,
    allFlights:()=>void,
}

export const FlightContext = createContext<FlightContextType | null>(null)
const state = StateService.createState(data)
const extra_state = StateService.createExtraState(state)


const FlightsWrapper:FC<FlightsProps> = ({children}) => {
    const [ flights_ex ] = useState<FlightTypeEx[]>(state)
    const [ flights,setFlights ] = useState<FlightType[]>(extra_state)


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

    const sortByStops = (param:boolean) => {
        if (param) {
            setFlights(state => state.filter((item) => {
                return {
                    ...item,
                    tickets:item.tickets.filter(ticket => ticket.ticket.id === 1),
                }
            }))
        } else {
            setFlights(state =>  state.reduce((acc,item) => {
                item.tickets.filter(ticket => typeof ticket.ticket.id === "number")
                acc.push(item)
                return acc
            },[] as FlightType[]))
        }
    }


    const allFlights = () => setFlights(extra_state)


    return (<FlightContext.Provider value={{
        flights,
        flights_ex,
        airlines,
        priceFromHigh,
        priceFromLow,
        sortByCarrier,
        sortByPrice,
        sortByStops,
        allFlights,
    }}>
        {children}
    </FlightContext.Provider>)
}

export const useFlightsContext = () => useContext(FlightContext)
export default FlightsWrapper