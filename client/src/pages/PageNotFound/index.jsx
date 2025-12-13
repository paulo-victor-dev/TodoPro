import { Link } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
    return (
        <div className="container">
            <div className="logo">
                <img src="public\favicon.png"/>
                Todo<span className='logo-partial'>Pro</span>
            </div>

            <span className="notfound-title">Ops... Parece que essa página não existe.</span>

            <Link to="/" className="notfound-link">Ir para Home</Link>
        </div>
    );
}