import "./home.css";
import Vnavbar from "../../components/Vertical-navbar/Vnavbar";
import Hnavbar from "../../components/Horizontal-navbar/Hnavbar";
import Daily from "../../components/Daily/Daily";
import Time from "../../components/Time/Time";
import Rating from "../../components/Rating/Rating";
import Score from "../../components/Score/Score";
import Nutrition from "../../components/Nutrition/Nutrition";
import getID from "../../data/data";

function Home() {
    var testing = getID().then(data => {return data});
    console.log(testing);
    return (
        <>
            <div className="Home">
                <Hnavbar />
                <div className="dashboard">
                    <Vnavbar />
                    <div className="welcome">
                        <div>Bonjour</div>
                        <div>Thomas</div>
                        <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
                    </div>
                    <div className="left-container">
                        <Daily />
                        <div className="bottom-widgets">
                            <Time />
                            <Rating />
                            <Score />
                        </div>
                    </div>
                    <div className="right-container">
                        <Nutrition />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;