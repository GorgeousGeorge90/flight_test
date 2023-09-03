import { FC, useState } from 'react';
import { useFlightsContext } from '../../context/flights/FlightsWrapper';
import FlightItem from './components/FlightItem/FlightItem';
import styles from './FlightsList.module.scss';
import Modal from '../../UI/Modal/Modal';
import FlightItemEx from './components/FlightItemEx/FlightItemEx';



type FlightsListType = {
    currentPage:number,
    pagePortion:number,
}

export type CurrentType = {
    id:number,
    index:number,
}

const FlightsList:FC<FlightsListType> = ({currentPage, pagePortion}) => {
    const [ active,setActive ] = useState<boolean>(false)
    const [ current,setCurrentItem ] = useState<CurrentType | null>(null)
    const state = useFlightsContext()
    let lastIndex = currentPage * pagePortion
    let firstIndex = lastIndex - pagePortion


    const setCurrent = ({id,index}:CurrentType) => {
        setCurrentItem(prev => {
            return {
                ...prev,
                id,
                index,
            }
        })
    }

    return (<section className={styles.tickets_list_container}>
        <ul className={styles.tickets_list_content}>
            {
                state ? state.flights.slice(firstIndex,lastIndex).map(flight => <li key={flight.id}>
                    <FlightItem flight={flight}
                                setActive={setActive}
                                setCurrent={setCurrent}
                    />
                </li>):null
            }
        </ul>
        <Modal active={active} setActive={setActive}>
            {
                current ? <FlightItemEx {...current}/>:null
            }
        </Modal>
    </section>)
}

export default FlightsList