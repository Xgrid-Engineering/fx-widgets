import "../styles/squadron-attendance.css";
import { squadronAttendance } from "../lib/data";

function SquadronAttendance() {
  return (
    <div className="container">
      <div className="att-wrapper">
        {squadronAttendance.map((data, index) => (
          <AttendanceDetailsCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

const AttendanceDetailsCard = ({
  name,
  present,
  disposal,
  color,
}: TSquadronAttendance) => {
  return (
    <div className="sqn-detail-card flex-1">
      <div className="flex-row gap-2 items-center sqn-name">
        <div
          className="circle"
          style={{
            backgroundColor: color,
          }}
        />
        <p className="stat-text">{name}</p>
      </div>
      <div className="flex-row gap-2">
        <div className="present-section flex-1">
          <p className="present fw-600 mb-1">{present}</p>
          <p className="stat-text">Present</p>
        </div>

        <div className="flex-1 ml-2">
          <p className="disposal fw-600 mb-1">{disposal}</p>
          <p className="stat-text">Disposal</p>
        </div>
      </div>
    </div>
  );
};

export default SquadronAttendance;
