import React, { useState } from 'react'
import messages from '../../shared/messagesApi'
import useStore from '../../shared/store/store'

const ChatInput = () => {
    // Убрать в переменные окружения
    // const idInstance = '7103153348'
    // const apiTokenInstance = '2a6e01ef33a941d98678b0c33386d46174e935e0d8b34580a4'
    //Это вообще в пропсы всё
    // const chatId = '996221803561@c.us'
    const [text, setText] = useState<string>('')
    // const {setChatsList, getPhoneNumber} = useStore();

    const handleSendMessage = (chatId: string, message: string) => {
        // messages.post(`/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, 
        //     {
        //         chatId: chatId, 
        //         message: message
        //     })
        // setChatsList({chatId, message})
    }
    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            {/* Кнопка должна быть отдельно, конечно же */}
            <button onClick={() => {/*handleSendMessage(chatId, text)*/}}>Жми меня и проверяй всё</button>
        </div>
    )
}

export default ChatInput