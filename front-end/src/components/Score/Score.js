import "./Score.css";
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

/**
 * @description Component Score
 * @param {object} props score of user
 * @returns ReactComponent
 */
function Score(props) {

    var data = [{ value: props.data, name: "time" }];

    return (
        <>
            <div className="score">
                <RadialBarChart
                    width={260}
                    height={260}
                    data={data}
                    innerRadius="80%"
                    barSize={10}
                    startAngle={90}
                    endAngle={450}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 30,
                        bottom: 30,
                    }}
                    style={{
                        background: "#FBFBFB",
                        borderRadius: "5px",
                    }}>
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 1]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        background
                        dataKey="value"
                        cornerRadius={5}
                        fill="#FF0000"
                    />
                </RadialBarChart>
                <div className="score-wrapper">
                    <div className="score-title">Score</div>
                    <div className="score-legend">
                        <div className="score-value">{data[0].value * 100}%</div>
                        <div className="score-text">de votre objectif</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Score;