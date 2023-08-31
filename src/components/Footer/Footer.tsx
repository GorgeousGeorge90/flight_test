import styles from './Footer.module.scss';
import { ReactComponent as GH } from './../../assets/img/gh.svg';


const Footer = () => {

    return (<footer className={styles.footer_container}>
                <div className={styles.footer_content}>
                    <a href='https://github.com/GorgeousGeorge90'>
                        <GH className={styles.footer_icon}/>
                    </a>
                    <p>check my GH for other works</p>
                </div>
            </footer>)
}

export default Footer