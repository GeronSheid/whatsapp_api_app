import React, { useState } from 'react';
import styles from './styles.module.scss';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import useStore from '../../shared/store/store';
import messages from '../../shared/messagesApi';

const ChatWindowFooter = () => {
    const currentChat = useStore(state => state.currentChat);
    const idInstance = useStore(state => state.idInstance);
    const apiTokenInstance = useStore(state => state.apiTokenInstance);
    // const idInstance = '7103153865'
    // const apiTokenInstance = '606259558ea6414f8dd41a0ad37884937f75a3a1107d48faa8'
    const {addMessageToList} = useStore(); 
    const [txt, setTxt] = useState<string>('');

    const sendMessage = async () => {
        try {
            const res = await messages.post(`/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, 
                {
                    chatId: `${currentChat}@c.us`, 
                    message: txt
                })
                
            addMessageToList(currentChat, 
                {
                    messageId: res.data.idMessage, 
                    messageText: txt, 
                    chatId: currentChat
                });
            setTxt('');
        } catch(error) {
            console.log(error);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        sendMessage();
    }
    return (
        <footer>
            <form className={styles.footer} onSubmit={(e) => handleSubmit(e)}>
                <Input value={txt} onChange={(e) => setTxt(e.target.value)} />
                <Button>Отправить</Button>
            </form>
        </footer>
    )
}

export default ChatWindowFooter