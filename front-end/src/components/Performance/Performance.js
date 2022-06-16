import "./Performance.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

/**
 * @description Component Radar
 * @param {array} props performance of user
 * @returns ReactComponent
 */
function Performance(props) {

    var data = props.data;

    const Kind = [
        "Intensité",
        "Vitesse",
        "Force",
        "Endurance",
        "Energie",
        "Cardio",
      ];
    
      function formatedTick(tick) {
        return Kind[tick - 1];
      }

    return (
        <>
            <RadarChart
                outerRadius={90}
                width={260}
                height={260} 
                data={data} 
                style={{
                    background: "#282D30",
                    borderRadius: "5px",
                }}>
                <PolarGrid radialLines={false}
                    polarRadius={[10, 20, 40, 60]} />
                <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} tickFormatter={formatedTick} style= {{fontSize: 12}}/>
                <Radar dataKey="value" stroke="#ff0101" fill="#ff0101" fillOpacity={0.7} />
            </RadarChart>
        </>
    )
}

export default Performance;