import "./profil.css";
import Vnavbar from "../../components/Vertical-navbar/Vnavbar";
import Hnavbar from "../../components/Horizontal-navbar/Hnavbar";
import Daily from "../../components/Daily/Daily";
import Time from "../../components/Time/Time";
import Rating from "../../components/Rating/Rating";
import Score from "../../components/Score/Score";
import Nutrition from "../../components/Nutrition/Nutrition";
import { Main_data, Activity, Average_session, Performance } from "../../services/api";
import { GetName } from "../../services/api";
import { useParams } from "react-router-dom";

function Profil() {

    let {id}  = useParams();
    const name = GetName(id);

    console.log(id);

    return (
        <>
            <div className="Home">
                <Hnavbar />
                <div className="dashboard">
                    <Vnavbar />
                    <div className="content-wrap">
                        <div className="welcome">
                            <div className="name">
                                <div className="bonjour">Bonjour</div>
                                <div className="userName">{Main_data.userInfos.firstName}</div>
                            </div>
                            <div className="motivation-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
                        </div>
                        <div className="dataviz-container">
                            <div className="left-container">
                                <Daily data={Activity} />
                                <div className="bottom-widgets">
                                    <Time data={Average_session} />
                                    <Rating data={Performance} />
                                    <Score data={Main_data} />
                                </div>
                            </div>
                            <div className="right-container">
                                <Nutrition data={Main_data.keyData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profil;