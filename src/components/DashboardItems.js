import React from "react";
import lineChart from "../Images/linechart.svg";
import underChart from "../Images/underChart.svg";
const DashboardItems = ({ title, amount, chart }) => {
  return (
    <div className=" p-18 flex justify-between bg-white-white rounded-sm border border-opacity-borderBlue">
      <div>
        <h5 className=" text-gray-dashboard">{title}</h5>
        <h2 className=" font-medium">{amount}</h2>
      </div>
      <div className="w-62 relative">
        <img src={lineChart} alt="" className=" absolute right-0 left-0" />
        <img src={underChart} alt="" className="" />
      </div>
    </div>
  );
};

export default DashboardItems;
