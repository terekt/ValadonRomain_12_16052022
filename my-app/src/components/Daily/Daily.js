import "./Daily.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Daily(props) {

    const data = [];

    for (let i = 0; i < props.data.sessions.length; i++) {
        data.push({ calories: props.data.sessions[i].calories, kilogram: props.data.sessions[i].kilogram, day: i + 1 });
    }
    //console.log(data);

    return (
        <>
            <div className="daily">
                <BarChart
                    width={800}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="2 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="kilogram" fill="#282D30" radius={[25, 25, 0, 0]} barSize={7} />
                    <Bar dataKey="calories" fill="#E60000" radius={[25, 25, 0, 0]} barSize={7} />
                </BarChart>
            </div>
        </>
    )
}

export default Daily;