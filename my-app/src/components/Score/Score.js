import "./Score.css";
import { RadialBarChart, RadialBar, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';

function Score(props) {

    const data = [{value: props.data, name: "time"}];
    //console.log(data);

    return (
        <>
            <RadialBarChart width={260} height={260} data={data} innerRadius="80%" barSize={10} startAngle={90} endAngle={450} style={{
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
        </>
    )
}

export default Score;