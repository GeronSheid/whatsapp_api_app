import React from 'react'
import styles from './styles.module.scss'

interface ModalWindowProps {
    children: React.ReactNode,
    closeFunction: () => void
}



const ModalWindow: React.FC<ModalWindowProps> = ({children, closeFunction}) => {
    return (
        <div className={styles.modalWrap}>
            <div className={styles.modalWindow}>
                <button onClick={closeFunction}>Закрыть</button>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow