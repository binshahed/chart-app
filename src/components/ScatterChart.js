import React from "react";
import { Scatter } from "react-chartjs-2";
import { scatterChartData } from "../data/scatterChartData";

const ScatterChart = ({ title }) => {
  return (
    <div className="chart-common-style ">
      <h4 className="text-center ">{title}</h4>
      <Scatter data={scatterChartData} />
    </div>
  );
};

export default ScatterChart;
