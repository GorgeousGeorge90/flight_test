import gamer from './../../assets/img/gamer.png';
import girl from './../../assets/img/girl.png';
import styles from './UsersList.module.scss';
import { FC } from 'react';
import { useUserContext } from '../../context/user/UserWrapper';


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
    const state = useUserContext()

    return (<ul className={styles.users_list}>
        {
            avatars.map(ava => <li key={ava.id}>
                <img src={ava.avatar}
                     alt='ava'
                     onClick={()=>{
                         state?.changeAvatar(ava.avatar)
                         onClick()
                     }}
                />
            </li>)
        }
    </ul>)
}

export default UsersList