import "./Nutrition.css";
import icon1 from "../../assets/fire.png";
import icon2 from "../../assets/chicken.png";
import icon3 from "../../assets/apple.svg";
import icon4 from "../../assets/cheeseburger.svg";

function Nutrition(props) {

    //console.log(props.data);

    const calorie = props.data.calorieCount;
    const protein = props.data.proteinCount;
    const carbohydrate = props.data.carbohydrateCount;
    const lipid = props.data.lipidCount;

    return (
        <>
            <div className="calorie nutrition">
                <div className="icon">
                    <img src={icon1} alt="" />
                </div>
                <div className="nutrition-text">
                    <div className="quantity">{calorie}kCal</div>
                    <div className="nutrition-name">Calories</div>
                </div>
            </div>
            <div className="protein nutrition">
                <div className="icon">
                    <img src={icon2} alt="" />
                </div>
                <div className="nutrition-text">
                    <div className="quantity">{protein}g</div>
                    <div className="nutrition-name">Proteines</div>
                </div>
            </div>
            <div className="carbohydrate nutrition">
                <div className="icon">
                    <img src={icon3} alt="" />
                </div>
                <div className="nutrition-text">
                    <div className="quantity">{carbohydrate}g</div>
                    <div className="nutrition-name">Glucides</div>
                </div>
            </div>
            <div className="lipid nutrition">
                <div className="icon">
                    <img src={icon4} alt="" />
                </div>
                <div className="nutrition-text">
                    <div className="quantity">{lipid}g</div>
                    <div className="nutrition-name">Lipides</div>
                </div>
            </div>
        </>
    )
}

export default Nutrition;