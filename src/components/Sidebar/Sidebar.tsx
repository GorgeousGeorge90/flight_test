import styles from './Sidebar.module.scss';
import { useContext } from 'react';
import { FlightContext } from '../../context/flights/FlightsWrapper';
import PriceLimit from "./PriceLimit/PriceLimit";


const Sidebar = () => {
    const flights = useContext(FlightContext)

    const fromLow = () => flights ? flights.priceFromLow():console.log(null)
    const fromHigh = () => flights ? flights.priceFromHigh():console.log(null)
    const sortByPrice = (min:string, max:string) => flights ? flights.sortByPrice(min,max):console.log(null)

    return (<section className={styles.sidebar_container}>
        <div className={styles.sidebar_content}>
            <h3 className={styles.sidebar_all}
                onClick={() => flights ? flights.allFlights():
                    console.log(null)}
            >все билеты</h3>
            <section className={styles.sidebar_item}>
                <h3 className={styles.sidebar_title}>сортировать</h3>
                <ul className={styles.sidebar_sort_list}>
                    <li className={styles.sidebar_list_item}>
                        <input type='radio' id={'low'} name={'sort'}/>
                        <label htmlFor={'low'} onClick={fromLow}> - по возрастанию цены</label>
                    </li>
                    <li className={styles.sidebar_list_item}>
                        <input type='radio' id={'high'} name={'sort'}/>
                        <label htmlFor={'high'} onClick={fromHigh}> - по убыванию цены</label>
                    </li>
                </ul>
            </section>
            <section className={styles.sidebar_item}>
                <h3 className={styles.sidebar_title}>фильтровать</h3>
                <ul className={styles.sidebar_sort_list}>
                    <li><input type='checkbox'/><span> - с пересадкой</span></li>
                    <li><input type='checkbox'/><span> - без пересадок</span></li>
                </ul>
            </section>
            <section className={styles.sidebar_item}>
                <h3 className={styles.sidebar_title}>цена</h3>
                <PriceLimit sortFunc={sortByPrice}/>
            </section>
            <section className={styles.sidebar_item}>
                <h3 className={styles.sidebar_title}>авиакомпании</h3>
                <ul className={styles.sidebar_sort_list}>
                    {
                        flights ? flights.airlines.map((item,i) => <li key={i}>
                            <input type='radio'
                                   name={'air'}
                                   onClick={() => flights ? flights.sortByCarrier(item):
                                       console.log(null)}
                            /><span> - {item}</span>
                        </li>):null
                    }
                </ul>
            </section>
        </div>
    </section>)
}

export default Sidebar