import "./profil.css";
import Vnavbar from "../../components/Vertical-navbar/Vnavbar";
import Hnavbar from "../../components/Horizontal-navbar/Hnavbar";
import Daily from "../../components/Daily/Daily";
import Time from "../../components/Time/Time";
import Rating from "../../components/Rating/Rating";
import Score from "../../components/Score/Score";
import Nutrition from "../../components/Nutrition/Nutrition";
import Data from "../../assets/data";

function Profil() {

    var Main_data = Data.USER_MAIN_DATA[0];
    //console.log(Main_data);
    var Activity = Data.USER_ACTIVITY[0];
    //console.log(Activity);
    var Average_session = Data.USER_AVERAGE_SESSIONS[0];
    //console.log(Average_session);
    var Performance = Data.USER_PERFORMANCE[0];
    //console.log(Performance);




    return (
        <>
            <div className="Home">
                <Hnavbar />
                <div className="dashboard">
                    <Vnavbar />
                    <div className="content-wrap">
                        <div className="welcome">
                            <div>Bonjour</div>
                            <div>{Main_data.userInfos.firstName}</div>
                            <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
                        </div>
                        <div className="dataviz-container">
                            <div className="left-container">
                                <Daily data={Activity} />
                                <div className="bottom-widgets">
                                    <Time data={Average_session} />
                                    <Rating data={Performance} />
                                    <Score data={Main_data.todayScore} />
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