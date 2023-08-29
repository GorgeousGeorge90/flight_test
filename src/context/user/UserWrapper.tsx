import { createContext, FC, ReactNode, useState } from 'react';
import base_user from './../../assets/img/user.png';
import gamer from './../../assets/img/gamer.png';
import girl from './../../assets/img/girl.png';



type UserProps = {
    children:ReactNode,
}

type UserType = {
    name:string | null,
    avatar: string,
}

type UserContextType = {
    user: UserType,
    loginUser:(name:string) => void,
    logoutUser:() => void,
    changeAvatar:(avatar:UserType['avatar']) => void,
}

export const UserContext = createContext<UserContextType | null>(null)

const UserWrapper:FC<UserProps> = ({children}) => {
    const [user,setUser] = useState<UserType>({
            name:null,
            avatar:base_user,
    })

    const loginUser = (name:string) => setUser(user => {
        return {
            ...user,
            name,
        }
    })

    const logoutUser = () => setUser(user => {
        return {
            ...user,
            name: null,
            avatar: base_user,
        }
    })

    const changeAvatar = (avatar:UserType['avatar']) => setUser(user => {
        return {
            ...user,
            avatar,
        }
    })

    return (<UserContext.Provider value={{
        user,
        loginUser,
        logoutUser,
        changeAvatar,
    }}>
        {children}
        </UserContext.Provider>)
}

export default UserWrapper