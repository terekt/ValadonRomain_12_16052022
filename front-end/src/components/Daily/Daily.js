import "./Daily.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function Daily(props) {

    const data = [];

    for (let i = 0; i < props.data.sessions.length; i++) {
        data.push({ calories: props.data.sessions[i].calories, kilogram: props.data.sessions[i].kilogram, day: i + 1 });
    }


    return (
        <>
            <div className="daily">
                <BarChart
                    width={820}
                    height={300}
                    data={data}
                    margin={{
                        top: 80,
                        right: 50,
                        left: 40,
                        bottom: 30,
                    }}
                    style={{
                        background: "#FBFBFB",
                        borderRadius: "5px",
                    }}
                >
                    <CartesianGrid strokeDasharray="2 3" vertical={false} />
                    <XAxis dataKey="day" tickMargin={15} tickLine={false} axisLine={false} />
                    <YAxis orientation="right" tickMargin={40} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Bar dataKey="kilogram" fill="#282D30" radius={[25, 25, 0, 0]} barSize={7} />
                    <Bar dataKey="calories" fill="#E60000" radius={[25, 25, 0, 0]} barSize={7} />
                </BarChart>
                <div className="daily-wrapper">
                    <div className="daily-title">Activité quotidienne</div>
                    <div className="daily-legend">
                        <div className="daily-legend-item">
                            <div className="daily-legend-point point-black" />
                            <p className="daily-legend-text">Poids (kg)</p>
                        </div>
                        <div className="daily-legend-item">
                            <div className="daily-legend-point point-red" />
                            <p className="daily-legend-text">Calories brûlées (kCal)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Daily;