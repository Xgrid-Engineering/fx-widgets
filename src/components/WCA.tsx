/* eslint-disable react-refresh/only-export-components */
import rightArrow from "../assets/right-arrow.png";
import ProfileImage from "./ProfileImage";
import activityIcon from "../assets/activity.svg";
import handIcon from "../assets/hand-cursor.svg";
import "../styles/wca.css";
import { WCA_Data } from "../lib/data";

function WCA() {
  return (
    <div className="flex-col items-start text-black wca">
      {WCA_Data.map((data, index) => (
        <div key={index} className="w-100 wca-row">
          <Row {...data} />
        </div>
      ))}
    </div>
  );
}

const Row = ({ name, id, activity, status, score, img, ringColor }: TWCA) => {
  return (
    <div className="flex-row justify-between w-100 items-center">
      <div className="flex-row items-center gap-4 wca-row-content">
        <ProfileImage src={img} ringColor={ringColor} />

        <div className="flex-col items-start gap-2">
          <div className="flex-row gap-2 wca-content-bio">
            <p className="fw-400 pr-2">{name}</p>
            <p className="fw-400">{id}</p>
          </div>

          <div className="flex-row gap-2">
            <div className="flex-row gap-2 wca-activity pr-2">
              <p className="fw-500">{activity}</p>
              <p className="fw-500">
                {status} ({score})
              </p>
            </div>

            <div className="flex-row gap-4">
              <img src={activityIcon} alt="activity" />
              <img src={handIcon} alt="activity" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={rightArrow} alt="arrow" />
      </div>
    </div>
  );
};

export default WCA;
