import "./Performance.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

function Performance(props) {

    var data = props.data;
    //console.log(data)
    
    async function updateKind() {
        data[0].kind = "Intensité";
        data[1].kind = "Vitesse";
        data[2].kind = "Force";
        data[3].kind = "Endurance";
        data[4].kind = "Energie";
        data[5].kind = "Cardio";
    }

    updateKind();

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
                <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} style= {{fontSize: 12}}/>
                <Radar dataKey="value" stroke="#ff0101" fill="#ff0101" fillOpacity={0.7} />
            </RadarChart>
        </>
    )
}

export default Performance;