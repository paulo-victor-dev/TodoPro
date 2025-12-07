import User from '../User';
import './Header.css';

export default function Header() {
    return(
        <header>
            <span className='logo'>
                <img src="public\favicon.png"/>
                Todo<span className='logo-partial'>Pro</span>
            </span>

            <User />         
        </header>
    );
}