import React from 'react'
import styles from './styles.module.scss';
import { IMessage } from '../../shared/store/store';
import Message from '../Message/Message';

interface ChatWindowMessagesProps {
    messages: IMessage[] | undefined;
}

const ChatWindowMessages: React.FC<ChatWindowMessagesProps> = ({ messages }) => {
    return (
        <div className={styles.window}>
            {messages?.map(message =>
                <Message
                    key={message.messageId}
                    messageText={message.messageText}
                    messageId={message.messageId}
                    chatId={message.chatId}
                    sender={message?.sender} 
                />)}
        </div>
    )
}

export default ChatWindowMessages