import gamer from './../../assets/img/gamer.png';
import girl from './../../assets/img/girl.png';
import styles from './UsersList.module.scss';
import { FC, useContext } from 'react';
import { UserContext } from '../../context/user/UserWrapper';


type ListProps = {
    onClick:() => void,
}

type AvaType = {
    id:number,
    avatar:string,
}

const avatars:AvaType[] = [
    {id:1, avatar:gamer},
    {id:2, avatar:girl},
]

const UsersList:FC<ListProps> = ({onClick}) => {
    const user = useContext(UserContext)

    return (<ul className={styles.users_list}>
        {
            avatars.map(ava => <li key={ava.id}>
                <img src={ava.avatar}
                     alt='ava'
                     onClick={()=>{
                         user?.changeAvatar(ava.avatar)
                         onClick()
                     }}
                />
            </li>)
        }
    </ul>)
}

export default UsersList