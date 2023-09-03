import styles from './Sidebar.module.scss';
import { useContext } from 'react';
import { FlightContext } from '../../context/flights/FlightsWrapper';
import PriceLimit from './PriceLimit/PriceLimit';


const Sidebar = () => {
    const state = useContext(FlightContext)

    const fromLow = () => state?.priceFromLow()
    const fromHigh = () => state?.priceFromHigh()
    const sortByPrice = (min:string, max:string) => state?.sortByPrice(min,max)

    return (<section className={styles.sidebar_container}>
        <div className={styles.sidebar_content}>
            <h3 className={styles.sidebar_all}
                onClick={() => state ? state.allFlights():
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
                    <li onClick={() => state?.sortByStops(true)}><input type='checkbox'/><span> - с пересадкой</span></li>
                    <li onClick={() => state?.sortByStops(false)}><input type='checkbox'/><span> - без пересадок</span></li>
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
                        state ? state.airlines.map((item,i) => <li key={i}
                                                                                  className={styles.sidebar_company}
                                                                                  onClick={() => state?.sortByCarrier(item)}>
                            {item}
                        </li>):null
                    }
                </ul>
            </section>
        </div>
    </section>)
}

export default Sidebar