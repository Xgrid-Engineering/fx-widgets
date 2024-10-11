import "../styles/merit.css";
import { Merit_Data } from "../lib/data";
import ProfileImage from "./ProfileImage";

function Merit() {
  return (
    <div className="flex-col items-start text-black merit">
      {Merit_Data.map((data, index) => (
        <div key={index} className="w-100 merit-row">
          <Row {...data} />
        </div>
      ))}
    </div>
  );
}

const Row = ({ name, id, img, ringColor, rank, obtained, total }: TMerit) => {
  return (
    <div className="flex-row justify-between w-100 items-center">
      <div className="flex-row items-center gap-4">
        <ProfileImage src={img} ringColor={ringColor} />

        <div className="flex-col items-start gap-2">
          <div className="flex-row gap-2">
            <p className="fw-400">{name}</p>
          </div>

          <div className="flex-row gap-2 pr-2 merit-score">
            <p className="fw-500 pr-2 border">{id}</p>
            <p className="fw-500">
              Score:{" "}
              <span className="fw-700">
                {obtained}/{total}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <Rank rank={rank} />
      </div>
    </div>
  );
};

const Rank = ({ rank }: { rank: number }) => {
  function getRankSuffix(rank: number): string {
    if (rank % 10 === 1) {
      return "st";
    } else if (rank % 10 === 2) {
      return "nd";
    } else if (rank % 10 === 3) {
      return "rd";
    }
    return "th";
  }

  const rankStyle =
    rank === 1 || rank === 2 || rank === 3 ? { "--rank": rank } : {};

  return (
    <div className="rank-badge" style={rankStyle as React.CSSProperties}>
      Rank: {rank}
      <sup>{getRankSuffix(rank)}</sup>
    </div>
  );
};
export default Merit;
