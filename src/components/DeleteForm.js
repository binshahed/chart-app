import React from "react";

const DeleteForm = ({ handelChangeDelete, handleDelete, selectedCharts }) => {
  return (
    <div>
      <div className=" w-75">
        <label htmlFor="chartName" className="form-label">
          Chart Name
        </label>
        <select onChange={handelChangeDelete} className="form-select">
          <option value="">Select One</option>
          {selectedCharts.length > 1 && (
            <option value="deleteAll">Delete All</option>
          )}
          {selectedCharts.map((s) => (
            <option value={s.chartName}>{s.chartName}</option>
          ))}
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
