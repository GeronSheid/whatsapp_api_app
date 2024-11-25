import React from 'react'
import { IMessage } from '../../shared/store/store'

import styles from './styles.module.scss';

const Message: React.FC<IMessage> = ({messageId, messageText, sender, chatId}) => {

    const messageType = sender?.split('@')[0] === chatId ? `${styles.message} ${styles.message_in}` : `${styles.message} ${styles.message_out}`

    return (
        <div className={messageType}>
            {messageText}
        </div>
    )
}

export default Message