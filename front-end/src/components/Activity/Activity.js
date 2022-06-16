import "./Activity.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function Activity(props) {

    const data = [];

    for (let i = 0; i < props.data.length; i++) {
        data.push({ calories: props.data[i].calories, kilogram: props.data[i].kilogram, day: i + 1 });
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="Activity-tooltipBar">
              <p className="Activity-tooltipBar-content">{`${payload[0].value} kg`}</p>
              <p className="Activity-tooltipBar-content">{`${payload[1].value} Kcal`}</p>
            </div>
          );
        }
      
        return null;
    };

    return (
        <>
            <div className="Activity">
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
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: '#C4C4C480', strokeWidth: 2 }}  />
                    <Bar dataKey="kilogram" fill="#282D30" radius={[25, 25, 0, 0]} barSize={7} />
                    <Bar dataKey="calories" fill="#E60000" radius={[25, 25, 0, 0]} barSize={7} />
                </BarChart>
                <div className="Activity-wrapper">
                    <div className="Activity-title">Activité quotidienne</div>
                    <div className="Activity-legend">
                        <div className="Activity-legend-item">
                            <div className="Activity-legend-point point-black" />
                            <p className="Activity-legend-text">Poids (kg)</p>
                        </div>
                        <div className="Activity-legend-item">
                            <div className="Activity-legend-point point-red" />
                            <p className="Activity-legend-text">Calories brûlées (kCal)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activity;