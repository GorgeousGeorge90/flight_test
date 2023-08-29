import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './UserInput.module.scss';
import { useContext } from 'react';
import { UserContext } from "../../context/user/UserWrapper";



type UserProps = {
    name: string | null,
}


const UserInput = () => {
    const user = useContext(UserContext)
    const {register, reset, handleSubmit} = useForm<UserProps>()
    const handleClick: SubmitHandler<UserProps> = data => {
        if (user && data?.name) {
            user.loginUser(data.name)
            reset()
        }
    }

    return (<section className={styles.user_form_container}>
        <form className={styles.user_form_content}
              onSubmit={handleSubmit(handleClick)}>
            <input className={styles.user_form_input}
                   type={'text'}
                   placeholder={'Введите имя'}
                   {...register('name',{ required:true })}
            />
            <button className={styles.user_form_button}>авторизоваться</button>
        </form>
    </section>)
}

export default UserInput