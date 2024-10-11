import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import rightArrow from "../assets/right-arrow.png";
import "../styles/squadron-ranking.css";
import { sqnItems } from "../lib/data";
import medal from "../assets/medal.svg";
import gold from "../assets/gold.svg";
import bronze from "../assets/bronze.svg";

type TSqnItem = {
  id: number;
  sqn: number;
  points: number;
  position: number;
  data?: TSqdItemDetail[];
};

type TSqdItemDetail = {
  event: string;
  marks: number;
};

function SquadronRankingWidget() {
  const [selectedSqn, setSelectedSqn] = useState<TSqnItem | null>(null);

  const getIconClass = (item: TSqnItem) => {
    if (item.position && item.position > 3) {
      return `icon position-${item.position}`;
    }
    return "icon medal";
  };

  const handleSqnClick = (item: TSqnItem) => {
    setSelectedSqn(item);
  };

  const closeDetailView = () => {
    setSelectedSqn(null);
  };

  const handleNext = () => {
    if (!selectedSqn) return;
    const currentIndex = sqnItems.findIndex(
      (item) => item.id === selectedSqn.id
    );
    const nextIndex = currentIndex + 1;
    if (nextIndex < sqnItems.length) {
      setSelectedSqn(sqnItems[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (!selectedSqn) return;
    const currentIndex = sqnItems.findIndex(
      (item) => item.id === selectedSqn.id
    );
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      setSelectedSqn(sqnItems[previousIndex]);
    }
  };

  return (
    <div className="container">
      {!selectedSqn && (
        <Rankings
          sqnItems={sqnItems}
          handleSqnClick={handleSqnClick}
          getIconClass={getIconClass}
        />
      )}

      {selectedSqn && (
        <div className="sqn-list">
          <div className="sqn-header flex-row justify-between">
            <div className="flex-row gap-2">
              <p className="border">SQN {selectedSqn.sqn}</p>
              <p>
                Total Points:{" "}
                <span className="fw-600">{selectedSqn.points}/100</span>
              </p>
            </div>

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
          <DataTable value={selectedSqn.data} className="mb-2">
            <Column field="event" header="Event" />
            <Column field="marks" header="Marks" />
          </DataTable>
        </div>
      )}
    </div>
  );
}

type RankingsProps = {
  sqnItems: TSqnItem[];
  handleSqnClick: (item: TSqnItem) => void;
  getIconClass: (item: TSqnItem) => string;
};

const Rankings = ({
  sqnItems,
  handleSqnClick,
  getIconClass,
}: RankingsProps) => {
  const getMedal = (position: number) => {
    if (!position) return medal;

    switch (position) {
      case 1:
        return gold;
      case 2:
        return bronze;
      default:
        return medal;
    }
  };
  return (
    <div className="sqn-wrapper">
      <div className="sqn-header">
        <p>
          Squadron Ranking <span>(Championship)</span>
        </p>
      </div>
      {sqnItems.map((item) => (
        <div
          key={item.id}
          className={`sqn-item sqn-${item.sqn}`}
          onClick={() => handleSqnClick(item)}
        >
          <div className={getIconClass(item)}>
            {item.position <= 3 ? (
              <img src={getMedal(item.position)} alt="medal" />
            ) : (
              item.position
            )}
          </div>
          <div className="sqn-info flex-row gap-3">
            <span className="border-white fw-400">SQN {item.sqn}</span>
            <span className="sqn-points">Total Points: {item.points}</span>
          </div>
          <div className="chevron">
            <img src={rightArrow} alt="right-arrow" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SquadronRankingWidget;
