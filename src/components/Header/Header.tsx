import styles from './Header.module.scss';
import logo from './../../assets/img/logo.png';
import { useState } from 'react';
import { useUserContext } from '../../context/user/UserWrapper';
import UserInput from '../UserInput/UserInput';
import UsersList from '../UsersList/UsersList';


const Header = () => {
    const state = useUserContext()
    const [editMode,setEditMode] = useState(false)

    return (<header className={styles.header_container}>
                <div className={styles.header_content}>
                    <section className={styles.header_logo}>
                        <img src={logo} alt='logo'/>
                        <section className={styles.header_info}>
                            <h1 className={styles.header_info_title}>Northern Hermes</h1>
                            <p className={styles.header_info_text}>only good offers!</p>
                        </section>
                        <section className={styles.header_input}>
                            {
                                state?.user.name ? <p style={{fontStyle:"italic"}}>Have a nice travels with Northen Hermes, {state.user.name}!</p>:<UserInput/>
                            }
                        </section>
                        <section className={styles.header_user_info}>
                            {
                                state?.user.name ? <>
                                    <div className={styles.header_user_about}>
                                        <img className={styles.header_user_ava}
                                             src={state?.user.avatar}
                                             alt='ava'
                                             onClick={() => setEditMode(!editMode)}
                                        />
                                        <p>{state?.user.name}</p>
                                        <button className={styles.btn}
                                                onClick={()=> state.logoutUser()}>logout</button>
                                    </div>
                                    {
                                        editMode ? <UsersList onClick={()=>setEditMode(false)}/> : null
                                    }
                                </> : <p>not authorized</p>
                            }
                        </section>
                    </section>
                </div>
            </header>)
}

export default Header