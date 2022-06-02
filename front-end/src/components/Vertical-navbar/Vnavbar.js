import "./Vnavbar.css";
import Meditation from "../../assets/meditation.png";
import Swim from "../../assets/Swim.png";
import Bycycle from "../../assets/bycycle.png";
import Weight from "../../assets/weight.png";
import { NavLink } from 'react-router-dom';

function Vnavbar() {
    return (
        <>
            <div className="Vnavbar">
                <nav>
                    <ul>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
                            <img src={Meditation} alt="Meditation" />
                        </NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
                            <img src={Swim} alt="Swim" />
                        </NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
                            <img src={Bycycle} alt="Bycycle" />
                        </NavLink></li>
                        <li><NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
                            <img src={Weight} alt="Weight" />
                        </NavLink></li>
                    </ul>
                </nav>
                <div className="copyright">Copyright, SportSee 2020</div>
            </div>
        </>
    )
}

export default Vnavbar;