import React, { useState } from 'react'
import styles from './style.module.scss';
import { createPortal } from 'react-dom';
import ModalWindow from '../ModalWindow/ModalWindow';
import PhoneForm from '../PhoneForm/PhoneForm';

import { IoIosAddCircleOutline } from "react-icons/io";

const ChatMenu = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <header className={styles.header}>
            <div className={styles.headerWrap}>
                <h1 className={styles.h1}>Чаты</h1>
                <button className={styles.btn} onClick={() => setShowModal(true)}><IoIosAddCircleOutline size={30}/></button>
                {showModal && createPortal(
                    <ModalWindow closeFunction={() => setShowModal(false)}>
                        <PhoneForm closeFunction={() => setShowModal(false)}/>
                    </ModalWindow>, document.body)}
            </div>
        </header>
    )
}

export default ChatMenu