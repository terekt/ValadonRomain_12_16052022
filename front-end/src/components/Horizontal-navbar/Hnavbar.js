import "./Hnavbar.css";
import Logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

function Hnavbar() {
    return (
        <>
            <div className="Hnavbar">
                <img src={Logo} alt="logo" className="logo" />
                <nav className="menu">
                    <ul>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Accueil</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Profil</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Réglage</NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Communauté</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Hnavbar;