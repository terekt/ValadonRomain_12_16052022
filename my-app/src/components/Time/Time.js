import "./Time.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Time(props) {

    //console.log(props.data.sessions)

    const data = props.data.sessions;

    return (
        <>
            <div className="time">
                <AreaChart width={260} height={260} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }} style={{
                        background: "#FF0000",
                        borderRadius: "5px",
                    }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="day" hide={true} />
                    <YAxis hide={true} padding={{ top: 80, bottom: 50 }} />
                    <Tooltip cursor={{
                        stroke: "black",
                        strokeOpacity: 0.1,
                        strokeWidth: 40,
                    }} />
                    <Area type="monotone" dataKey="sessionLength" stroke="#ffffff" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </div>
        </>
    )
}

export default Time;