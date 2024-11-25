import React from 'react'
import styles from './styles.module.scss'

type ChatWindowHeaderProps = {
    phone: string
}

const ChatWindowHeader: React.FC<ChatWindowHeaderProps> = ({phone}) => {
    return (
        <header className={styles.header}>
            <h2>{`+${phone}`}</h2>
        </header>
    )
}

export default ChatWindowHeader