import React from "react";
import { Line } from "react-chartjs-2";
import { lineChartData } from "../data/lineChartData";

const LineChart = ({title}) => {
  return (
    <div className="chart-common-style ">
       <h4 className="text-center ">{title}</h4>
      <Line data={lineChartData} />
    </div>
  );
};

export default LineChart;
