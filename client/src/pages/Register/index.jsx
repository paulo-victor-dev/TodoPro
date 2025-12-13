import { useState } from 'react';
import { Link } from "react-router-dom";
import { registerUser } from '../../api/auth.api';
import "../Login/Login.css";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        
        const result = await registerUser({username: username, password: password});

        if (result.success) {
            window.location.href = '/login';
        } else {
            setError(result.error)
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="logo">
                    <img src="public\favicon.png"/>
                    Todo<span className='logo-partial'>Pro</span>
                </div>

                <div className="title-area">
                    <span className="title">Criando sua conta</span>
                    <span className="subtitle">Entre com suas credenciais para se registrar</span>
                </div>

                {error && 
                    <div className="error-area">
                        <span className="error-title">{error}</span>
                    </div>
                }

                <div className="input-area">
                    <div className="username-area">
                        <span className="username-title">Nome de usuário</span>
                        <input 
                            className={error ? 'input-username error' : 'input-username'}
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="password-area">
                        <span className="password-title">Senha</span>
                        <input 
                            className={error ? 'input-password error' : 'input-password'}
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">
                        Criar conta
                    </button>

                    <div className="register-area">
                        <span className="register-title">Já possui uma conta?</span>
                        
                        <Link to="/login" className="register-link">Ir para login</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}