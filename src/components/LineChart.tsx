import "../styles/activity-progress.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

type ChartData = {
  week: number;
  attendance: number;
  activities: number;
};

type LineChartProps = {
  data: ChartData[];
};

export default function LineChart({ data }: LineChartProps) {
  const chartData = {
    labels: data.map((item) => item.week),
    datasets: [
      {
        label: "Attendance",
        data: data.map((item) => item.attendance),
        borderColor: "#A27F5B",
        backgroundColor: "#A27F5B",
        tension: 0.5,
      },
      {
        label: "Activities",
        data: data.map((item) => item.activities),
        borderColor: "#5B8BA3",
        backgroundColor: "#5B8BA3",
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="line-chart-container flex-col gap-2 items-center">
      <Line data={chartData} options={options} />
      <p className="stat-text">No. of Weeks</p>
      <div className="flex-row items-center justify-center gap-4">
        <div className="flex-row gap-2 items-center">
          <div className="circle" style={{ backgroundColor: "#A27F5B" }}></div>
          <p className="stat-text">Attendance</p>
        </div>
        <div className="flex-row gap-2 items-center">
          <div className="circle" style={{ backgroundColor: "#5B8BA3" }}></div>
          <p className="stat-text">Activities</p>
        </div>
      </div>
    </div>
  );
}
