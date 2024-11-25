import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import ChatWidnow from '../../components/ChatWindow/ChatWidnow'

import styles from './style.module.scss';

const MainPage = () => {
    return (
        <div className={styles.window}>
            <SideBar/>
            <ChatWidnow />
        </div>
    )
}

export default MainPage