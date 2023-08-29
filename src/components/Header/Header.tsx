import styles from './Header.module.scss';


const Header = () => {


    return (<header className={styles.header_container}>
                <div className={styles.header_content}>
                    <div className={styles.header_logo}>

                    </div>
                    <div className={styles.header_title}>
                        Header
                    </div>
                </div>
            </header>)
}

export default Header