import "./Session.css";
import { Line, LineChart, XAxis, Tooltip } from 'recharts';

/**
 * @description Component Session
 * @param {array} props session of user
 * @returns ReactComponent
 */
function Session(props) {

    const data = props.data;

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="time-tooltip">
              <p className="time-tooltip-content">{`${payload[0].value} min`}</p>
            </div>
          );
        }
      
        return null;
      };

    return (
        <>
            <div className="time">
                <LineChart width={260} height={260} data={data}
                    margin={{ top: 70, bottom: 40 }} style={{
                        background: "#FF0000",
                        borderRadius: "5px",
                    }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                            <stop offset={`${0}%`} stopColor="#ff7070" />
                            <stop offset={`${100}%`} stopColor="white"  />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="day" hide={true} />
                    <Tooltip content={<CustomTooltip />} cursor={{
                        stroke: "black",
                        strokeOpacity: 0.1,
                        strokeWidth: 40,
                    }} />
                    <Line type="monotone" dot={false} dataKey="sessionLength" stroke="url(#colorUv)" strokeWidth={1.5} />
                </LineChart>
                <div className="time-wrapper">
                    <div className="time-title">Durée moyenne des sessions</div>
                    <div className="time-legend">
                        <div className="time-day">L</div>
                        <div className="time-day">M</div>
                        <div className="time-day">M</div>
                        <div className="time-day">J</div>
                        <div className="time-day">V</div>
                        <div className="time-day">S</div>
                        <div className="time-day">D</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Session;