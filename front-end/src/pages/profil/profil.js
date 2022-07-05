import "./profil.css";
import Vnavbar from "../../components/Vertical-navbar/Vnavbar";
import Hnavbar from "../../components/Horizontal-navbar/Hnavbar";
import Activity from "../../components/Activity/Activity";
import Session from "../../components/Session/Session";
import Performance from "../../components/Performance/Performance";
import Score from "../../components/Score/Score";
import Keydata from "../../components/Keydata/Keydata";
import { GetName, GetActivityData, GetKeyData, GetPerformance, GetScore, GetSessionData } from "../../services/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Profil() {

    let { id } = useParams();
    let name = GetName(id);
    let activity = GetActivityData(id);
    let keydata = GetKeyData(id);
    let performance = GetPerformance(id);
    let score = GetScore(id);
    let session = GetSessionData(id);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (name !== "" || activity !== "" || keydata !== "" || performance !== "" || score !== "" || session !== "") {
            setLoading(false)
        }
    }, [name, activity, keydata, performance, score, session]);

    if (loading === false) {
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
                                    <div className="userName">{name}</div>
                                </div>
                                <div className="motivation-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
                            </div>
                            <div className="dataviz-container">
                                <div className="left-container">
                                    <Activity data={activity} />
                                    <div className="bottom-widgets">
                                        <Session data={session} />
                                        <Performance data={performance} />
                                        <Score data={score} />
                                    </div>
                                </div>
                                <div className="right-container">
                                    <Keydata data={keydata} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profil;