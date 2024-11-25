import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss';
import { IMessage } from '../../shared/store/store';
import Message from '../Message/Message';

interface ChatWindowMessagesProps {
    messages: IMessage[] | undefined;
}

const ChatWindowMessages: React.FC<ChatWindowMessagesProps> = ({ messages }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const endRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className={styles.window} ref={containerRef}>
            {messages?.map(message =>
                <Message
                    key={message.messageId}
                    messageText={message.messageText}
                    messageId={message.messageId}
                    chatId={message.chatId}
                    sender={message?.sender} 
                />)}
                <div ref={endRef} />
        </div>
    )
}

export default ChatWindowMessages