import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function BarChart({ chartData }) {
  return (
    <div className="chart-common-style ">
      <p>bar chart</p>
      <Bar data={chartData} />;
    </div>
  );
}

export default BarChart;
