import React from 'react';
import styles from './styles.module.scss';

interface InputProps {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    placeholder?: string
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder='' }) => {
    return (
        <div className={styles.input}>
            <input
                type='text'
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
            />
        </div>
    )
}

export default Input