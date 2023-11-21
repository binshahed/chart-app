import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useState } from "react";
import { barChartData } from "../data/barChartData";
Chart.register(...registerables);

function BarChart({ title }) {
  const [userData, setUserData] = useState({
    labels: barChartData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: barChartData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="chart-common-style ">
      <h4 className="text-center ">{title}</h4>
      <Bar data={userData} />;
    </div>
  );
}

export default BarChart;
