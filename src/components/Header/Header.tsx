import styles from './Header.module.scss';
import TicketSearch from '../TicketSearch/TicketSearch';
import logo from './../../assets/img/logo.png';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/user/UserWrapper';
import UserInput from "../UserInput/UserInput";
import UsersList from "../UsersList/UsersList";


const Header = () => {
    const user = useContext(UserContext)
    const [editMode,setEditMode] = useState(false)

    return (<header className={styles.header_container}>
                <div className={styles.header_content}>
                    <section className={styles.header_logo}>
                        <img src={logo} alt='logo'/>
                        <section className={styles.header_info}>
                            <h1 className={styles.header_info_title}>Northern Hermes</h1>
                            <p className={styles.header_info_text}>only good offers!</p>
                        </section>
                        <section className={styles.header_user_info}>
                            {
                                user?.user.name ? <>
                                    <div className={styles.header_user_about}>
                                        <img className={styles.header_user_ava}
                                             src={user?.user.avatar}
                                             alt='ava'
                                             onClick={() => setEditMode(!editMode)}
                                        />
                                        <p>{user?.user.name}</p>
                                        <button className={styles.btn}
                                                onClick={()=> user.logoutUser()}>logout</button>
                                    </div>
                                    {
                                        editMode ? <UsersList onClick={()=>setEditMode(false)}/> : null
                                    }
                                </> : <p>not authorized</p>
                            }
                        </section>
                    </section>
                    {
                        user?.user.name ? <TicketSearch/>:<UserInput/>
                    }
                </div>
            </header>)
}

export default Header