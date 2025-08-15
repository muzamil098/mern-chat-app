import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label htmlFor="" className={'label gap-2 cursor-pointer'}>
          <span>Male</span>
        </label>
        <input type="checkbox" className="checkbox border-slate-900" name="" id="" />
      </div>
       <div className="form-control">
        <label htmlFor="" className={'label gap-2 cursor-pointer'}>
          <span>Female</span>
        </label>
        <input type="checkbox" className="checkbox border-slate-900" name="" id="" />
      </div>
    </div>
  );
};

export default GenderCheckbox;
