import "../styles/attendance.css";
import infoIcon from "../assets/attendance-info.svg";

type TDetailsCard = {
  title: string;
  present: number;
  disposal: number;
  showBorder?: boolean;
};

type TStat = {
  value: number;
  text: string;
  icon?: string;
};

function Attendance() {
  const data = {
    present: 48,
    medial: 2,
    others: 4,
    Paf: {
      present: 32,
      disposal: 2,
    },
    Others: {
      present: 16,
      disposal: 0,
    },
  };

  return (
    <div className="attendance flex-col">
      <div className="flex-row attendance-row">
        <Stat value={data.present} text="Present" />
        <Stat value={data.medial} text="Medial" />
        <Stat value={data.others} text="Others" icon={infoIcon} />
      </div>

      <div className="flex-row gap-2 attendance-details-row">
        <DetailsCard
          title="PAF"
          present={data.Paf.present}
          disposal={data.Paf.disposal}
        />

        <DetailsCard
          title="Others"
          present={data.Others.present}
          disposal={data.Others.disposal}
        />
      </div>
    </div>
  );
}

const DetailsCard = ({ title, present, disposal }: TDetailsCard) => {
  return (
    <div className="attendance-detail-card flex-1">
      <p className="stat-text detail-card-title">{title}</p>
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

const Stat = ({ value, text, icon }: TStat) => {
  return (
    <div className="flex-col attendance-stat">
      <p className="stat-value mb-4">{String(value).padStart(2, "0")}</p>
      <div className="flex-row gap-2 items-center">
        <p className="stat-text">{text}</p>
        {icon && <img src={icon} alt="info" />}
      </div>
    </div>
  );
};

export default Attendance;
