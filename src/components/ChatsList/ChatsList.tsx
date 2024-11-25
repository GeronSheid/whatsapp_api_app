import React from 'react'
import styles from './styles.module.scss'
import { IChat } from '../../shared/store/store'
import { ChatsListItem } from '../ChatsListItem/ChatsListItem'

export interface ChatListProps {
  chats: IChat[]
}

const ChatsList: React.FC<ChatListProps> = ({chats}) => {

  return (
    <div className={styles.chatsListWrap}>
      <ul className={styles.chatsList}>
        {chats.map(chat => (
          <ChatsListItem 
            key={chat.phoneNumber} 
            phoneNumber={chat.phoneNumber} 
            message={chat?.messages[chat?.messages.length - 1]?.messageText}/>
        ))}
      </ul>
    </div>
  )
}

export default ChatsList