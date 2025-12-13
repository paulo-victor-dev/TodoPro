import { useEffect, useState } from 'react';
import UserMenu from './UserMenu';
import { getUserInfo } from '../../api/auth.api';
import './User.css';

export default function User() {
    const [username, setUsername] = useState('');
    const [isActive, setIsActive] = useState(false);

    function activeMenu() {
        const newIsActive = !isActive;
        setIsActive(newIsActive);
    }

    useEffect(() => {
        async function getUsername() {
            const response = await getUserInfo();
            setUsername(response.username.toUpperCase());
        }
        getUsername();
    }, [])

    return(
        <div className='user-container'>
            <button 
                className='user-area'
                type='button'
                onClick={() => activeMenu()}
            >
                <span className="user-icon material-icons">account_circle</span>

                <span className='user-name'>{username}</span>

                <span className={isActive ? "user-arrow-rotate material-icons" : "user-arrow material-icons"}>arrow_drop_down</span>
            </button>

            <UserMenu isActive={isActive}/>
        </div>

    );
}