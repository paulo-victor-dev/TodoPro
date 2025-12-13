import { logoutUser } from '../../../api/auth.api';
import './UserMenu.css';

export default function UserMenu({ isActive }) {
    async function handleLogout() {
        const refreshToken = localStorage.getItem('refresh');
        console.log(refreshToken)
        const resp = await logoutUser({refresh: refreshToken});
        window.location.href = '/login';
    }

    return (
        <div className={isActive ? 'user-menu active' : 'user-menu'}>
            <ul>
                <li>
                    <button onClick={handleLogout}>
                        <span className="user-menu-icon material-icons">logout</span>
                        <span className='user-menu-title'>Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}