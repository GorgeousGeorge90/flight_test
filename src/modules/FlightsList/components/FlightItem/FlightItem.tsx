import { FlightType } from '../../types/types';
import styles from './FlightItem.module.scss';
import icon from './../../../../assets/img/icon.png';
import { CurrentType } from '../../FlightsList';



export type FlightItemProps = {
    flight: FlightType,
    setActive: (param:boolean) => void,
    setCurrent: (param:CurrentType) => void,
}


const FlightItem = ({flight,setActive,setCurrent}:FlightItemProps) => {

    return (<section className={styles.ticket_container}>
        <div className={styles.ticket_content}>
            <header className={styles.ticket_header}>
                <span><img src={icon} alt='icon'/></span>
                <p style={{fontWeight: 'bold', fontStyle: 'italic'}}>{flight.carrier}</p>
                <p className={styles.ticket_price}>
                    <span style={{fontSize: 'larger'}}>{flight.price} &#8381;</span>
                    <span style={{fontSize: 'x-small'}}>Cтоимость для одного взрослого пассажира</span>
                </p>
            </header>
            <ul className={styles.ticket_list}>
                {
                    flight.tickets.map((item, i) => <li key={i}>
                        <main className={styles.ticket_main}>
                            <p>
                                {item.ticket.departureCity},&nbsp;
                                <span>{item.ticket.departureAirport.caption}</span>&nbsp;
                                <span style={{color: 'blue'}}>( {item.ticket.departureAirport.uid} )</span>
                                &nbsp;&rarr;&nbsp;
                                {item.ticket.arrivalCity},&nbsp;
                                <span>{item.ticket.arrivalAirport.caption}</span>&nbsp;
                                <span style={{color: 'blue'}}>( {item.ticket.arrivalAirport.uid} )</span>
                            </p>
                            <hr/>
                            <span className={styles.ticket_time}>
                                <b>{item.ticket.departureDate}</b>&rarr;
                                <span className={styles.ticket_duration}>
                                <p>&#9201; {item.duration}</p>
                                    {
                                        item.ticket.hasOwnProperty('id') ? <p className={styles.ticket_rule}
                                                            onClick={() => {
                                                                const payload = {
                                                                    id:item.ticket.id,
                                                                    index:item.ticket.index,
                                                                }

                                                                setCurrent(payload as CurrentType)
                                                                setActive(true)
                                                            }}>1 пересадка</p>:null
                                    }
                            </span>&rarr;
                                <b>{item.ticket.arrivalDate}</b>
                    </span>
                            <hr/>
                            <p>
                                Рейс выполняет: {item.ticket.operatingAirline}
                            </p>
                            <hr style={{borderWidth: '2px', borderColor: 'darkgray'}}/>
                        </main>
                    </li>)
                }
            </ul>
            <footer className={styles.ticket_footer}>
                <button>выбрать</button>
            </footer>
        </div>
    </section>)
}

export default FlightItem