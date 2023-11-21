import React from "react";
import { Pie } from "react-chartjs-2";
import { pieChartData } from "../data/pieChartData";

const PieChart = ({ title }) => {
  return (
    <div className="chart-common-style ">
      <h4 className="text-center ">{title}</h4>
      <Pie data={pieChartData} />
    </div>
  );
};

export default PieChart;
