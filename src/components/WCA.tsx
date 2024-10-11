/* eslint-disable react-refresh/only-export-components */
import rightArrow from "../assets/right-arrow.png";
import ProfileImage from "./ProfileImage";
import activityIcon from "../assets/activity.svg";
import handIcon from "../assets/hand-cursor.svg";
import "../styles/wca.css";
import { WCA_Data } from "../lib/data";
import { useState } from "react";

function WCA() {
  const [selectedCase, setSelectedCase] = useState<TWCA | null>(null);

  const handleCaseClick = (item: TWCA) => {
    setSelectedCase(item);
  };

  const closeDetailView = () => {
    setSelectedCase(null);
  };

  const handleNext = () => {
    if (!selectedCase) return;
    const currentIndex = WCA_Data.findIndex(
      (item) => item.id === selectedCase.id
    );
    const nextIndex = currentIndex + 1;
    if (nextIndex < WCA_Data.length) {
      setSelectedCase(WCA_Data[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (!selectedCase) return;
    const currentIndex = WCA_Data.findIndex(
      (item) => item.id === selectedCase.id
    );
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      setSelectedCase(WCA_Data[previousIndex]);
    }
  };

  return (
    <div className="flex-col items-start text-black wca">
      {!selectedCase ? (
        <div className="flex-col w-100">
          <div className="sqn-header flex-row">
            <p>
              WCA <span>(Weakness Cause Action)</span>
            </p>
          </div>
          {WCA_Data.map((data, index) => (
            <div
              key={index}
              className="w-100 wca-row"
              onClick={() => handleCaseClick(data)}
            >
              <Row {...data} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-col w-100">
          <div className="sqn-header flex-row justify-between">
            <p>
              WCA <span>(Weakness Cause Action)</span>
            </p>

            <div className="flex-row gap-2">
              <div className="action-btn rotate" onClick={handlePrevious}>
                <img src={rightArrow} alt="left-arrow" />
              </div>
              <div className="action-btn" onClick={handleNext}>
                <img src={rightArrow} alt="right-arrow" />
              </div>
              <div className="action-btn" onClick={closeDetailView}>
                <p>X</p>
              </div>
            </div>
          </div>

          <div className="w-100 wca-row">
            <CaseRow {...selectedCase} />
          </div>
        </div>
      )}
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

const CaseRow = ({
  name,
  id,
  rank,
  img,
  ringColor,
  weakCase,
  cause,
  action,
}: TWCA) => {
  return (
    <div className="flex-col w-100">
      <div className="flex-row gap-3 mb-3">
        <ProfileImage src={img} ringColor={ringColor} />
        <div className="flex-col gap-2">
          <p className="fw-400 pr-2 cadet-name">{name}</p>

          <div className="flex-row gap-2">
            <div className="flex-row gap-2">
              <p className="fw-500 border">{id}</p>
              <p className="fw-500 rank">
                Rank: <span>{rank}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col case-tag gap-2">
        <p>
          Weak Case: <span className="danger">{weakCase}</span>
        </p>
        <div className="flex-col gap-2 case-description">
          <p>
            Cause: <span>{cause}</span>
          </p>
          <p>
            Action: <span>{action}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WCA;
