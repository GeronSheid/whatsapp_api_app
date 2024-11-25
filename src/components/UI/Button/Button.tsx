import React from 'react';
import styles from './styles.module.scss';
interface BtnProps {
    children: React.ReactNode,
    type?: 'submit' | 'reset' | 'button',
    onClick?: () => void
}

const Button: React.FC<BtnProps> = ({children, type='submit', onClick}) => {
    return (
        <button
            onClick={onClick}
            className={styles.btn}
            type={type}
        >
            {children}
        </button>
        )
}

export default Button