import "../styles/descipline-info.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { gradingScaleData, options } from "../lib/data";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

function DesciplineInfo() {
  const data = {
    datasets: [
      {
        label: "Grading Scale",
        data: [8, 26, 9, 7, 14, 12, 10, 10],
        backgroundColor: [
          "#8CE99A",
          "#74C0FC",
          "#A5D8FF",
          "#FFD43B",
          "#FAB005",
          "#FFA8A8",
          "#FFB8B8",
          "#FF8787",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="descipline-info items-center ">
      <div className="pie-chart relative">
        <Doughnut data={data} options={options} />
        <div className="flex-col absolute items-center descipline-info-text">
          <p className="fw-600">124</p>
          <p>Total Cadets</p>
        </div>
      </div>

      <div className="flex-col">
        <ul className="flex-col items-end">
          {gradingScaleData.map((data, index) => (
            <li key={index} className="flex-row gap-1 mb-2">
              <div
                className="circle"
                style={{
                  backgroundColor: data.color,
                }}
              />

              <p className="decipline-grade-text">
                {data.min}
                {data.max === "Above" ? " & Above" : ` - ${data.max}`}: :{" "}
                <span>
                  {data.grade} ({data.percentage}%)
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DesciplineInfo;
