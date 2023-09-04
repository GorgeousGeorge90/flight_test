import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './PriceLimit.module.scss';
import { FC } from 'react';


type PriceType = {
    min:string,
    max:string,
}

type PriceProps = {
    sortFunc:(min:string,max:string) => void,
    param:boolean,
}


const PriceLimit:FC<PriceProps> = ({sortFunc,param}) => {
    const { register, reset, handleSubmit } = useForm<PriceType>()
    const handleClick:SubmitHandler<PriceType> = data => {
        let {min,max} = data
        sortFunc(min,max)
        reset()
    }

    return (<form onSubmit={handleSubmit(handleClick)}
                  className={styles.form_sort}>
        <label>от&nbsp;
            <input type="text"
                   placeholder={'min'}
                   {...register('min',{ required:true })}
            />
        </label>
        <label>до&nbsp;
            <input type="text"
                   placeholder={'max'}
                   {...register('max',{ required:true })}
            />
        </label>
        <button className={styles.form_sort_btn}
                style={{backgroundColor: param ? 'grey':'darkgray'}}>найти билеты</button>
    </form>)
}

export default PriceLimit