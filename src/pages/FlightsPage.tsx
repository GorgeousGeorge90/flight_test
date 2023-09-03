import FlightsList from '../modules/FlightsList/FlightsList';
import {useContext, useState} from 'react';
import Pagination from '../components/Pagination/Pagination';
import { FlightContext } from '../context/flights/FlightsWrapper';
import styles from './FligthsPage.module.scss';
import Modal from "../UI/Modal/Modal";


const FlightsPage = () => {
    const flights = useContext(FlightContext)
    const [currentPage,setCurrent] = useState(1)

    return (<section className={styles.flights_page_container}>
        {
            flights ? <Pagination totalPages={flights.flights.length}
                                  pagePortion={3}
                                  currentPage={currentPage}
                                  setCurrent={setCurrent}/> : null
        }
        <FlightsList currentPage={currentPage}
                     pagePortion={3}
        />
    </section>)
}

export default FlightsPage