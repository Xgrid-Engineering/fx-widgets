import "../styles/pending.css";
import { Pending_Data } from "../lib/data";
import linkIcon from "../assets/link-icon.svg";

function Pending() {
  return (
    <div className="pending">
      {Pending_Data.map((data, index) => (
        <div key={index} className="pending-row">
          <DetailsRow {...data} />
        </div>
      ))}
    </div>
  );
}

const DetailsRow = ({ code, name, instructor, date, timeSpans }: TPending) => {
  return (
    <div className="flex-row justify-between items-center pending-details-row">
      <div className="flex-col">
        <div className="flex-row pending-details-row-1 gap-2 pb-1">
          <p className="border">{code}</p>
          <p>{name}</p>
        </div>
        <div className="flex-row pending-details-row-2 gap-2">
          <p className="border">{instructor}</p>
          <p>
            {date}, {timeSpans}
          </p>
        </div>
      </div>

      <div>
        <img src={linkIcon} alt="link" />
      </div>
    </div>
  );
};

export default Pending;
