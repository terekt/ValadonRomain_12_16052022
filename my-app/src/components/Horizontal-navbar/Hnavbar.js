import "./Hnavbar.css";
import Logo from "../../assets/logo.png";

function Hnavbar() {
    return (
        <>
            <div className="Hnavbar">
                <img src={Logo} alt="logo" className="logo" />
                <nav className="menu">
                    <ul>
                        <li><a href="/" key={0}>Accueil</a></li>
                        <li><a href="/" key={1}>Profil</a></li>
                        <li><a href="/" key={2}>Réglage</a></li>
                        <li><a href="/" key={3}>Communauté</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Hnavbar;