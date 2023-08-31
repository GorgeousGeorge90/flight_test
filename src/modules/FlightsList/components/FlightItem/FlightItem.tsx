import { FlightType } from '../../types/types';
import { FC } from 'react';
import styles from './FlightItem.module.scss';
import icon from './../../../../assets/img/icon.png';


const FlightItem: FC<FlightType> = (flight) => {

    const final_flight = (element:number) => {
            const result = flight.tickets[element].ticket.reduce((acc, item, i) => {
                if (flight.tickets[element].ticket.length > 1) {
                    if (i === 0) {
                        acc.departureAirport = item.departureAirport
                        acc.departureCity = item.departureCity
                        acc.departureDate = item.departureDate
                    }

                    if (i === 1) {
                        acc.arrivalDate = item.arrivalDate
                        acc.arrivalCity = item.arrivalCity
                        acc.arrivalAirport = item.arrivalAirport
                        acc.operatingAirline = item.operatingAirline
                    }
                    return acc
                } else {
                    acc = item

                    return  acc
                }
            })

            result.duration = flight.tickets[element].duration

            return result
    }

    const flights = [final_flight(0),final_flight(1)]

    return (<section className={styles.ticket_container}>
        <div className={styles.ticket_content}>
            <header className={styles.ticket_header}>
                <span><img src={icon} alt='icon'/></span>
                <p style={{fontWeight:'bold', fontStyle:'italic'}}>{flights[0].airline}</p>
                <p className={styles.ticket_price}>
                    <span style={{fontSize:'larger'}}>{flight.price} &#8381;</span>
                    <span style={{fontSize:'x-small'}}>Cтоимость для одного взрослого пассажира</span>
                </p>
            </header>
            <ul className={styles.ticket_list}>
                {
                    flights.map((item, i) => <li key={i}>
                        <main className={styles.ticket_main}>
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
                                <p className={styles.ticket_rule}>1 пересадка</p>
                            </span>&rarr;
                                <b>{item.arrivalDate}</b>
                    </span>
                            <hr/>
                            <p>
                                Рейс выполняет: {item.operatingAirline}
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


    return (<section className={styles.ticket_container}>
            <ul className={styles.ticket_content}>
                {
                    flight.tickets.map((item, i) => <li key={i}>
                        <header className={styles.ticket_header}>
                            <p>{item.ticket[0].airline}</p>
                        </header>
                        <ul>
                            {
                                item.ticket.map((el,i) => <li key={i}>
                                    <section>
                                        <span>{el.departureCity}</span>,
                                        <span>{el.departureAirport.caption}</span>
                                        <span>({el.departureAirport.uid})</span>
                                        <span>&rarr;</span>
                                        <span>{el.arrivalCity}</span>,
                                        <span>{el.arrivalAirport.caption}</span>
                                        <span>({el.arrivalAirport.uid})</span>
                                    </section>
                                    <hr/>
                                    <section>
                                        <p>{el.departureDate}&#8213;&#9201;&#8213;{el.arrivalDate}</p>
                                    </section>
                                    <section>
                                        <p>Рейс выполняет:{el.operatingAirline}</p>
                                    </section>
                                    <hr/>
                                    </li>
                                )
                            }
                        </ul>
                    </li>)
                }
            </ul>
        <section>
            <p>Общая стоимость билетов для одного взрослого пассажира:{flight.price}&#8381;</p>
        </section>
    </section>)
}

export default FlightItem