import { FC, useContext, useState } from 'react';
import { FlightContext } from '../../context/flights/FlightsWrapper';
import FlightItem from './components/FlightItem/FlightItem';
import styles from './FlightsList.module.scss';
import Pagination from "../../components/Pagination/Pagination";


type FlightsListType = {
    currentPage:number,
    pagePortion:number,
}

const FlightsList:FC<FlightsListType> = ({currentPage, pagePortion}) => {
    const flights = useContext(FlightContext)
    let lastIndex = currentPage * pagePortion
    let firstIndex = lastIndex - pagePortion

    return (<section className={styles.tickets_list_container}>
        <ul className={styles.tickets_list_content}>
            {
                flights ? flights.flights.slice(firstIndex,lastIndex).map(flight => <li key={flight.id}>
                    <FlightItem {...flight}/>
                </li>):null
            }
        </ul>
    </section>)
}

export default FlightsList