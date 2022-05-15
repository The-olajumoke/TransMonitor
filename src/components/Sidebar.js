import React from "react";
import overview from "../Images/overview.svg";
const Sidebar = () => {
  return (
    <div className="border w-260 pt-33">
      <button className="w-163 h-33 mb-32 bg-primary-limeGreen text-white-white text-sm py-9 px-26  rounded-lg  font-bold leading-3 ml-42">
        GENERATE INVOICE
      </button>
      <div className="border">
        <div>
          <h6 className="mb-14 ml-42">Main</h6>
          <div className="flex w-full h-36">
            <div className="w-4 bg-primary-blue"></div>
            <div className="ml-38 border">
              <img src={overview} alt="" />
              <h6>Overview</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
