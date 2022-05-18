import "./home.css";
import Vnavbar from "../../components/Vertical-navbar/Vnavbar";
import Hnavbar from "../../components/Horizontal-navbar/Hnavbar";

function Home() {
    return (
        <>
            <div className="Home">
                <Hnavbar />
                <Vnavbar />
            </div>
        </>
    )
}

export default Home;