import { useState } from "react";
import BarChart from "../components/BarChar";
import { UserData } from "./userData";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import ScatterChart from "../components/ScatterChart";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
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
    <div style={{ marginLeft: "50px" }}>
      <h1>hello</h1>
      <BarChart chartData={userData} />
      <br />
      <br />
      <br />
      <LineChart />
      <br />
      <br />
      <br />
      <PieChart />
      <br />
      <br />
      <br />
      <ScatterChart />
    </div>
  );
};

export default Dashboard;
