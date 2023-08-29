import styles from './BaseButton.module.scss';
import { FC } from 'react';



type ButtonProps = {
    title: string,
}

const BaseButton:FC<ButtonProps> = ({title}) => {

    return (<button className={styles.base_button}>
        {title}
    </button>)
}

export default BaseButton