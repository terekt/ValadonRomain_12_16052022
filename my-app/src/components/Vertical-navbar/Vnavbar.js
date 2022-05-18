import "./Vnavbar.css";
import Meditation from "../../assets/meditation.png";
import Swim from "../../assets/Swim.png";
import Bycycle from "../../assets/bycycle.png";
import Weight from "../../assets/weight.png";

function Vnavbar() {
    return (
        <>
            <div className="Vnavbar">
                <nav>
                    <ul>
                        <li key={0} href="/">
                            <img src={Meditation} alt="Meditation" />
                        </li>
                        <li key={1} href="/">
                            <img src={Swim} alt="Swim" />
                        </li>
                        <li key={2} href="/">
                            <img src={Bycycle} alt="Bycycle" />
                        </li>
                        <li key={3} href="/">
                            <img src={Weight} alt="Weight" />
                        </li>
                    </ul>
                </nav>
                <div className="copyright">Copyright, SportSee 2020</div>
            </div>
        </>
    )
}

export default Vnavbar;