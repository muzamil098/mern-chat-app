import React from "react";

const GenderCheckbox = ({onGenderChangeHandler, selectedGender}) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span>Male</span>
        </label>
        <input type="checkbox" className="checkbox border-slate-900" name="" onChange={() => onGenderChangeHandler("male")} checked={selectedGender === 'male'}  />
      </div>
       <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
          <span>Female</span>
        </label>
        <input type="checkbox" className="checkbox border-slate-900" name="" checked={selectedGender === 'female'} onChange={() => onGenderChangeHandler("female")}  />
      </div>
    </div>
  );
};

export default GenderCheckbox;
