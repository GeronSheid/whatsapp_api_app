import React, { useState } from 'react'
import useStore from '../../shared/store/store'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import styles from './styles.module.scss';

type PhoneFormProps = {
    closeFunction: () => void
}

const PhoneForm: React.FC<PhoneFormProps> = ({closeFunction}) => {

    const {addNewChat, setCurrentChat} = useStore();
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [error, setError] = useState<string>('');
    const handlePhoneNumber = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(+phoneNumber)
        if(phoneNumber.length === 0 || isNaN(+phoneNumber)) {
            setPhoneNumber('');
            setError('Введите номер телефона')
            return
        }
        addNewChat(phoneNumber);
        setCurrentChat(phoneNumber);
        setPhoneNumber('');
        setError('');
        closeFunction();
    }
    return (
        <form className={styles.form} onSubmit={(e) => handlePhoneNumber(e)}>
            {error && <span>{error}</span>}
            <Input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder='Введите телефон'/>
            <Button>Начать чат</Button>
        </form>
    )
}

export default PhoneForm