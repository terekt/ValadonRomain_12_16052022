import "./Rating.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function Rating(props) {

    //console.log(props.data.data)
    const data = props.data.data;
    //const kind = props.data.kind;
    return (
        <>
            <RadarChart
                outerRadius={90}
                width={260}
                height={260} data={data} style={{
                    background: "#282D30",
                    borderRadius: "5px",
                }}>
                <PolarGrid radialLines={false}
                    polarRadius={[10, 20, 40, 60]} />
                <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} />
                <Radar dataKey="value" stroke="#ff0101" fill="#ff0101" fillOpacity={0.7} />
            </RadarChart>
        </>
    )
}

export default Rating;