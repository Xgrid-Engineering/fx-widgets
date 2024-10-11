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

const LineChart = ({ data }: LineChartProps) => {
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
  };

  return (
    <div className="line-chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
