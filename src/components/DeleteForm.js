import React from "react";

const DeleteForm = ({handelChangeDelete, handleDelete}) => {
  return (
    <div>
      <div className=" w-75">
        <label htmlFor="chartName" className="form-label">
          Chart Name
        </label>
        <select onChange={handelChangeDelete} className="form-select">
          <option value="">Select One</option>
          <option value="deleteAll">Delete All</option>
          <option value="BarChart">Bar Chart</option>
          <option value="LineChart">Line Chart</option>
          <option value="PieChart">Pie Chart</option>
          <option value="ScatterChart">Scatter Chart</option>
        </select>
      </div>
      <div className="mt-2">
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteForm;
