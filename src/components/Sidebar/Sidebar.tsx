import styles from './Sidebar.module.scss';
import { useFlightsContext } from '../../context/flights/FlightsWrapper';
import PriceLimit from './PriceLimit/PriceLimit';
import {useUserContext} from "../../context/user/UserWrapper";
import {CSSProperties} from "react";


const Sidebar = () => {
    const state = useFlightsContext()
    const user = useUserContext()

    const allFlights = () => state?.allFlights()
    const fromLow = () => state?.priceFromLow()
    const fromHigh = () => state?.priceFromHigh()
    const sortByPrice = (min:string, max:string) => state?.sortByPrice(min,max)



    return (<section className={styles.sidebar_container}>
        <div className={user?.user.name ? styles.sidebar_content:styles.sidebar_content_disabled}>
            <h3 className={styles.sidebar_all}
                onClick={allFlights}>все билеты</h3>
            <section className={styles.sidebar_item}>
                <h3 className={styles.sidebar_title}>сортировать</h3>
                <ul className={styles.sidebar_sort_list}>
                    <fieldset>
                    <li className={styles.sidebar_list_item} onClick={fromLow}>
                        <input type='radio' id={'low'} name={'sort'}/>
                        <label htmlFor={'low'}> - по возрастанию цены</label>
                    </li>
                    <li className={styles.sidebar_list_item} onClick={fromHigh}>
                        <input type='radio' id={'high'} name={'sort'}/>
                        <label htmlFor={'high'}> - по убыванию цены</label>
                    </li>
                    </fieldset>
                </ul>
            </section>
            <section className={styles.sidebar_item}>
                <h3 className={styles.sidebar_title}>цена</h3>
                <PriceLimit sortFunc={sortByPrice}
                            param={!!user?.user.name}
                />
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