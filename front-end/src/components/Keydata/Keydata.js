import "./Keydata.css";
import icon1 from "../../assets/fire.png";
import icon2 from "../../assets/chicken.png";
import icon3 from "../../assets/apple.svg";
import icon4 from "../../assets/cheeseburger.svg";

function Keydata(props) {

    //console.log(props.data);

    const calorie = props.data.calorieCount;
    const protein = props.data.proteinCount;
    const carbohydrate = props.data.carbohydrateCount;
    const lipid = props.data.lipidCount;

    return (
        <>
            <div className="calorie Keydata">
                <div className="icon">
                    <img src={icon1} alt="" />
                </div>
                <div className="Keydata-text">
                    <div className="quantity">{calorie}kCal</div>
                    <div className="Keydata-name">Calories</div>
                </div>
            </div>
            <div className="protein Keydata">
                <div className="icon">
                    <img src={icon2} alt="" />
                </div>
                <div className="Keydata-text">
                    <div className="quantity">{protein}g</div>
                    <div className="Keydata-name">Proteines</div>
                </div>
            </div>
            <div className="carbohydrate Keydata">
                <div className="icon">
                    <img src={icon3} alt="" />
                </div>
                <div className="Keydata-text">
                    <div className="quantity">{carbohydrate}g</div>
                    <div className="Keydata-name">Glucides</div>
                </div>
            </div>
            <div className="lipid Keydata">
                <div className="icon">
                    <img src={icon4} alt="" />
                </div>
                <div className="Keydata-text">
                    <div className="quantity">{lipid}g</div>
                    <div className="Keydata-name">Lipides</div>
                </div>
            </div>
        </>
    )
}

export default Keydata;