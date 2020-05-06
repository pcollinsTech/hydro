import React from "react";

export default function StepFour({ errors, setStep, handleChange, activity }) {
  return (
    <div>
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="name"
            name="name"
            className={`form-control ${errors.has("name") && "is-invalid"}`}
            placeholder="Name"
            value={activity.name || ""}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("name") && (
            <div className="invalid-feedback">{errors.first("name")}</div>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="description" className="col-sm-2 col-form-label">
          Description
        </label>
        <div className="col-sm-10">
          <textarea
            id="description"
            name="description"
            className={`form-control ${errors.has("description") &&
              "is-invalid"}`}
            rows="3"
            placeholder="Description"
            value={activity.description}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("description") && (
            <div className="invalid-feedback">
              {errors.first("description")}
            </div>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="content" className="col-sm-2 col-form-label">
          Content
        </label>
        <div className="col-sm-10">
          <MyEditor
            id="content"
            value={activity.content}
            onChange={(e) => handleChange("content", e)}
          />
          {errors.has("content") && (
            <div className="invalid-feedback">{errors.first("content")}</div>
          )}
        </div>
      </div>
      <div className="form-group row d-flex justify-content-between">
        <button onClick={() => setStep(2)} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
}
