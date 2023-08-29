import { FC } from 'react';
import styles from './BaseInput.module.scss';


type InputProps = {
    type:string,
    placeholder:string,
}

const BaseInput:FC<InputProps> = ({type,placeholder}) => {

    return (<input className={styles.base_input}
                   type={type}
                   placeholder={placeholder}
    />)
}

export default BaseInput