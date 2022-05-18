import "./Hnavbar.css";
import Logo from "../../assets/logo.png";

function Hnavbar() {
    return (
        <>
            <div className="Hnavbar">
                <img src={Logo} alt="logo" className="logo" />
                <nav className="menu">
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Profil</a></li>
                        <li><a href="#">Réglage</a></li>
                        <li><a href="#">Communauté</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Hnavbar;