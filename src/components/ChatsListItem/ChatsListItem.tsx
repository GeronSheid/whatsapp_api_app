import React from 'react';
import useStore from '../../shared/store/store';
import styles from './styles.module.scss';

type ChatsListItemProps = {
    phoneNumber: string,
    message: string | undefined
}

export const ChatsListItem: React.FC<ChatsListItemProps> = ({phoneNumber, message}) => {
    const currentChat = useStore(state => state.currentChat);
    const {setCurrentChat} = useStore();
    const handleClick = () => {
        setCurrentChat(phoneNumber)
    }
    const style = phoneNumber === currentChat ? `${styles.item} ${styles.item_active}` : styles.item;
    return (
        <li className={style} onClick={handleClick}>
            <div>
                <strong className={styles.phone}>{`+${phoneNumber}`}</strong>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    )
}
