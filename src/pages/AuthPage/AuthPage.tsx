import React, { useEffect, useState } from 'react'
import useStore from '../../shared/store/store';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

interface AuthPageProps {
    setAuth: () => void
}

const AuthPage: React.FC<AuthPageProps> = ({setAuth}) => {
    const navigate = useNavigate();

    const [id, setId] = useState<string>('');
    const [apiToken, setApiToken] = useState<string>('');
    const [error, setError] = useState<string>('');
    const {setIdInstance, setApiTokenInstance} = useStore()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.stopPropagation();
        e.preventDefault();
        if(!id || !apiToken) {
            setError('Введите id и token');
            return
        }
        setIdInstance(id);
        setApiTokenInstance(apiToken);
        setAuth();
        navigate('/');
        setId('');
        setApiToken('');
        setError('');
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={e => handleSubmit(e)}>
                {error && <span className={style.error}>{error}</span>}
                <label>
                    <span>Ваш id</span>
                    <Input value={id} onChange={e => setId(e.target.value)}/>
                </label>
                <label>
                    <span>Ваш apiToken</span>
                    <Input value={apiToken} onChange={e => setApiToken(e.target.value)}/>
                </label>
                <Button>Войти</Button>
            </form>
        </div>
    )
}

export default AuthPage