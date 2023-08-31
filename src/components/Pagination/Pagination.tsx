import styles from './Pagination.module.scss'
import { FC } from 'react';

type PaginatorProps = {
    totalPages:number,
    pagePortion:number,
    currentPage:number,
    setCurrent:(page:number)=>void,
}

const Pagination:FC<PaginatorProps>= ({totalPages,pagePortion,currentPage,setCurrent})=> {

    let pages = []
    let pageInfo = Math.ceil(totalPages/pagePortion)

    for (let i = 1; i <= pageInfo; i++) {
        pages.push(i)
    }

    return (<div className={styles.pagination_container}>
        <ul className={styles.pagination_list}>
            {
                pages.map((page, i) => <li key={i}
                                                   className={styles.pagination_list_item}
                                                   onClick={()=> setCurrent(page)}
                >{page}
                </li>)
            }
        </ul>
    </div>)
}


export default Pagination