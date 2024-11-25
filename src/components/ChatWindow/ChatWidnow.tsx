import React, { useEffect } from 'react';
import ChatWindowMessages from '../ChatWindowMessages/ChatWindowMessages';
import ChatWindowHeader from '../ChatWindowHeader/ChatWindowHeader';
import useStore from '../../shared/store/store';
import styles from './styles.module.scss';

import ChatWindowFooter from '../ChatWindowFooter/ChatWindowFooter';
import messages from '../../shared/messagesApi';

const ChatWidnow = () => {
    const currentChat = useStore(state => state.currentChat);
    const { addMessageToList } = useStore();
    const chat = useStore(state => state.chatsList.find(chat => chat.phoneNumber === currentChat));
    const idInstance = useStore(state => state.idInstance);
    const apiTokenInstance = useStore(state => state.apiTokenInstance);

    useEffect(() => {
        if(!currentChat) return
        let intervalId: NodeJS.Timeout | null = null;
        const fetchMessages = async () => {
            try {
                const res = await messages.get(`/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
                    {
                        params: { receiveTimeout: 2 }
                    });
                if (!res.data) {
                    console.log('Нет новых сообщений')
                    return
                }
                if(res.data.body.typeWebhook === "quotaExceeded") {
                    if (intervalId) {
                        clearInterval(intervalId);
                        intervalId = null;
                    }
                    return;
                }
                addMessageToList(
                    currentChat,
                    {
                        messageId: res.data.body.idMessage,
                        chatId: currentChat,
                        messageText: res.data.body.messageData.extendedTextMessageData.text,
                        sender: res.data.body?.senderData.sender
                    }
                )
                await messages.delete(`waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${res.data.receiptId}`)
            } catch (error) {
                console.log(error)
            }
        }

        intervalId = setInterval(() => {
            console.log('Происходит фетч')
            fetchMessages();
        }, 5000);


        return () => {
            if(intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [idInstance, apiTokenInstance, currentChat, addMessageToList])

    return (
        <div className={styles.window}>
            {currentChat && <>
                <ChatWindowHeader phone={chat ? chat.phoneNumber : ''} />
                <ChatWindowMessages messages={chat?.messages} />
                <ChatWindowFooter />
            </>}
        </div>
    )
}

export default ChatWidnow