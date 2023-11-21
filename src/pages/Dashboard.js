import { useState } from "react";
import BarChart from "../components/BarChar";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import ScatterChart from "../components/ScatterChart";
import ChartShowForm from "../components/ChartShowForm";
import DeleteForm from "../components/DeleteForm";

const Dashboard = () => {
  // states
  const [selectedCharts, setSelectedChart] = useState([]);
  const [deleteItem, setDeleteItem] = useState("");

  // chart add function
  const onSubmit = (data) => {
    if (data.chartName !== "" && data.title !== "") {
      const chartExist = selectedCharts.find(
        (ct) => ct.chartName === data.chartName
      );
      console.log("test", chartExist);
      if (!chartExist) {
        setSelectedChart([...selectedCharts, data]);
      }
    } else {
      alert("Please enter title and select a chart.");
    }
  };

  // delete on change handler
  const handelChangeDelete = (e) => {
    setDeleteItem(e.target.value);
  };

  // delete function
  const handleDelete = (e) => {
    if (deleteItem === "deleteAll") {
      console.log("Test Delete");
      setSelectedChart([]);
    } else {
      const updatedCharts = selectedCharts.filter(
        (obj) => obj.chartName !== deleteItem
      );
      setSelectedChart(updatedCharts);
    }
  };

  return (
    <div className="container">
      <div>
        <div className="row mb-5">
          {/* chart add form  */}
          <div className="col-6">
            <ChartShowForm onSubmit={onSubmit} />
          </div>
          {/* delete form  */}
          <div className="col-6">
            {selectedCharts.length > 0 && (
              <DeleteForm
                selectedCharts={selectedCharts}
                handelChangeDelete={handelChangeDelete}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </div>

        {selectedCharts.map((chart, index) => {
          let ChartComponent = null;
          switch (chart.chartName) {
            case "BarChart":
              ChartComponent = <BarChart title={chart.title} key={index} />;
              break;
            case "LineChart":
              ChartComponent = <LineChart title={chart.title} key={index} />;
              break;
            case "PieChart":
              ChartComponent = <PieChart title={chart.title} key={index} />;
              break;
            case "ScatterChart":
              ChartComponent = <ScatterChart title={chart.title} key={index} />;
              break;
            default:
              break;
          }

          return ChartComponent;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
