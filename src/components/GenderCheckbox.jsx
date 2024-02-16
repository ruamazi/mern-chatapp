import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="form-control">
        <label
          className={`flex flex-col  label gap-1 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          } `}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent checkbox-sm border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`flex flex-col  label gap-1 cursor-pointer  ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent checkbox-sm border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label flex flex-col gap-1 cursor-pointer  ${
            selectedGender === "else" ? "selected" : ""
          }`}
        >
          <span className="label-text">Else</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent checkbox-sm border-slate-900"
            checked={selectedGender === "else"}
            onChange={() => onCheckboxChange("else")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
