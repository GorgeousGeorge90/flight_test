import { useFlightsContext } from '../../../../context/flights/FlightsWrapper';
import { CurrentType } from '../../FlightsList';
import styles from '../FlightItem/FlightItem.module.scss';




const FlightItemEx = ({id,index}:CurrentType) => {
    const state = useFlightsContext()
    const current_ticket = state?.flights_ex.find(flight => flight.id === id)?.tickets[index].ticket

    return (<section className={styles.ticket_container}>
        {
            current_ticket ? <ul>
                {
                    current_ticket.map((item, i) => <li key={i}
                                                    className={styles.ticket_item}>
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
                        <span className={styles.ticket_time}>
                                <b>{item.departureDate}</b>&rarr;
                            <span className={styles.ticket_duration}>
                                <p>&#9201; {item.duration}</p>
                                <b>{item.arrivalDate}</b>
                            </span>
                        </span>
                    </li>)
                }
                <hr/>
            </ul>:null
        }
    </section>)
}

export default FlightItemEx