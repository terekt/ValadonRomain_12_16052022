import "./home.css";
import Vnavbar from "../../components/Vertical-navbar/Vnavbar";
import Hnavbar from "../../components/Horizontal-navbar/Hnavbar";
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Home() {



    return (
        <>
            <div className="Home">
                <Hnavbar />
                <div className="dashboard">
                    <Vnavbar />
                    <div className="content-wrap">
                        <div className="button-wrap">
                            <Link to="/12">
                                <button className="idSwitch">Karl</button>
                            </Link>
                            <Link to="/18">
                                <button className="idSwitch">Cecilia</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;