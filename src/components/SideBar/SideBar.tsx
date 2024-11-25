import React from 'react';
import ChatMenu from '../ChatMenu/ChatMenu';
import style from './styles.module.scss';
import ChatsList from '../ChatsList/ChatsList';
import useStore from '../../shared/store/store';


const SideBar = () => {
    const chats = useStore(state => state.chatsList)
    return (
        <aside className={style.sidebar}>
            <ChatMenu />
            <ChatsList chats={chats}/>
        </aside>
    )
}

export default SideBar