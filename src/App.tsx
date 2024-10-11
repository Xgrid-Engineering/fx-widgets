import "./App.css";
import DesciplineInfo from "./components/DesciplineInfo";
import Merit from "./components/Merit";
import WCA from "./components/WCA";
import ActivityDetails from "./components/ActivityDetails";
import LineChart from "./components/LineChart";
import { chartData } from "./lib/data";

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <WCA />
        <Merit />
        <DesciplineInfo />
        <ActivityDetails />
        <LineChart data={chartData} />
      </div>
    </div>
  );
}

export default App;
