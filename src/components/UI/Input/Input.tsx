import React from 'react';
import styles from './styles.module.scss';

interface InputProps {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
    return (
        <div className={styles.input}>
            <input
                type='text'
                value={value}
                onChange={onChange} 
            />
        </div>
    )
}

export default Input