import { create } from 'zustand';

export interface IChat {
    phoneNumber: string,
    messages: IMessage[]
}

export type IMessage = {
    messageId: string,
    chatId: string,
    messageText: string,
    timestamp?: string,
    sender?: string
}

export type IUserStore = {
    idInstance: string,
    apiTokenInstance: string,
    chatsList: IChat[],
    currentChat: string,
    setIdInstance: (newId: string) => void,
    setApiTokenInstance: (newApiToken: string) => void,
    getChat: (chatId: string) => any | undefined,
    addNewChat: (phoneNumber: string) => void,
    setCurrentChat: (currChat: string) => void,
    addMessageToList: (chatId: string, message: IMessage) => void
}

const useStore = create<IUserStore>((set, get) => ({
    idInstance: '',
    apiTokenInstance: '',
    chatsList: [],
    currentChat: '',
    setIdInstance: (newId) => set(state => ({ idInstance: newId })),
    setApiTokenInstance: (newApiToken) => set(state => ({ apiTokenInstance: newApiToken })),
    addNewChat: (phoneNumber) => set((state) => {
        const isUnique = !state.chatsList.some((chat) => chat.phoneNumber === phoneNumber);
        if (isUnique) {
            return { chatsList: [...state.chatsList, { phoneNumber, messages: [] }] };
        }
        return state;
    }),
    getChat: (chatId) => get().chatsList.find(state => state.phoneNumber === chatId),
    setCurrentChat: (currChat) => set(state => ({ currentChat: currChat })),
    addMessageToList: (chatId, message) => set(state => ({
        chatsList: state.chatsList.map(chat => chat.phoneNumber === chatId
            ?
            { ...chat, messages: [...chat.messages, message] }
            :
            chat
        )
    }))

}))

export default useStore