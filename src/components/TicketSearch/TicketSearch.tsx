import { useForm, SubmitHandler  } from 'react-hook-form';
import styles from './TicketSearch.module.scss';
import BaseButton from "../../UI/BaseButton/BaseButton";


type SearchProps = {
    start:string,
    end:string,
    start_date:Date | null,
    end_date?:Date | null,
}

const TicketSearch  = () => {
    const { register, reset, handleSubmit } = useForm<SearchProps>({
        defaultValues: {
            start:'Москва',
            start_date:null,
            end_date:null,
        }
    })
    const handleClick:SubmitHandler<SearchProps> = data => {
        console.log(data)
        reset()
    }

    return (<section className={styles.search_form_container}>
        <form className={styles.search_form_content}
              onSubmit={handleSubmit(handleClick)}>
            <input className={styles.search_form_input}
                   type='text'
                   placeholder={'Откуда'}
                   {...register('start', {required: true})}
            />
            <input className={styles.search_form_input}
                   type='text'
                   placeholder={'Куда'}
                   {...register('end', {required: true})}
            />
            <input className={styles.search_form_input}
                   type='date'
                   placeholder={'Когда'}
                   {...register('start_date', {required: true})}
            />
            <input className={styles.search_form_input}
                   type='date'
                   placeholder={'Обратно'}
                   {...register('end_date')}
            />
            <button className={styles.search_form_button}>найти билеты</button>
        </form>
    </section>)
}

export default TicketSearch