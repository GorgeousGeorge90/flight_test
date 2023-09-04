import { useFlightsContext } from '../../../../context/flights/FlightsWrapper';
import { CurrentType } from '../../FlightsList';
import styles from './FlightItemEx.module.scss';




const FlightItemEx = ({id,index}:CurrentType) => {
    const state = useFlightsContext()
    const current_ticket = state?.flights_ex.find(flight => flight.id === id)?.tickets[index].ticket

    return (<section className={styles.ticket_container}>
        {
            current_ticket ? <ul className={styles.ticket_list}>
                {
                    current_ticket.map((item, i) => <li key={i}
                                                    className={styles.ticket_item_ex}>
                        <p>
                            {item.departureCity},&nbsp;
                            <span>{item.departureAirport.caption}</span>&nbsp;
                            <span style={{color: 'blue'}}>( {item.departureAirport.uid} )</span>
                            &nbsp;&rarr;&nbsp;
                            {item.arrivalCity},&nbsp;
                            <span>{item.arrivalAirport.caption}</span>&nbsp;
                            <span style={{color: 'blue'}}>( {item.arrivalAirport.uid} )</span>
                        </p>
                        <hr/>
                        <p className={styles.ticket_time_travel}>
                                <b>{item.departureDate}</b>
                                <span>&rarr;</span>
                                <b>{item.arrivalDate}</b>
                        </p>
                    </li>)
                }
            </ul>:null
        }
    </section>)
}

export default FlightItemEx