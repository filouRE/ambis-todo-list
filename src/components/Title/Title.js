import React from "react";
// Images
import ModifyIcon from "../../assets/Modify.svg";

function Title() {
  return (
    <>
      <div className="title flex justify-center text-3xl gap-2">
        <h1 className="text-center font-bold ">Things todo today</h1>
        <img src={ModifyIcon} alt="modify icon" className="w-4" />
      </div>
    </>
  );
}

export default Title;
