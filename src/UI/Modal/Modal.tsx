import './Modal.scss';
import { FC, ReactNode } from 'react';


type ModalProps = {
    active:boolean,
    setActive:(param:boolean)=>void,
    children:ReactNode,
}

const Modal:FC<ModalProps>= ({active,setActive, children}) => {

    return (<div className={ active ? 'modal active': 'modal'}
                 onClick={()=>setActive(false)}>
        <div className={'modal_content'}>
            {children}
        </div>
    </div>)
}

export default Modal