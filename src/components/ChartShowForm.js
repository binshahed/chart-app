import React from "react";
import { useForm } from "react-hook-form";

const ChartShowForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-75">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            {...register("title")}
            type="text"
            className="form-control"
            id="title"
          />
        </div>

        <div className=" w-75">
          <label htmlFor="chartName" className="form-label">
            Chart Name
          </label>
          <select
            {...register("chartName")}
            className="form-select"
            id="chartName"
          >
            <option value="">Select A Chart</option>
            <option value="BarChart">Bar Chart</option>
            <option value="LineChart">Line Chart</option>
            <option value="PieChart">Pie Chart</option>
            <option value="ScatterChart">Scatter Chart</option>
          </select>
        </div>

        <div className="mt-2">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChartShowForm;
