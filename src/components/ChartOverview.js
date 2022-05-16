import React from "react";
import bigGraph from "../Images/bigGraph.svg";
import arrowDown from "../Images/arrow_down.svg";
import leftButton from "../Images/LeftButton.svg";
import rightButton from "../Images/RightButton.svg";
import ProgressItem from "../components/ProgressItem";
const ChartOverview = () => {
  return (
    <div
      style={{ minHeight: "329" }}
      className=" rounded-sm grid grid-cols-3 gap-2"
    >
      <div className=" col-span-2 bg-white-white">
        <div className="px-34 py-26 mb-45 flex justify-between items-center">
          <h2 className=" text-black-blackGrey font-medium">
            Today: 5, Aug 2018
          </h2>
          <div className=" flex items-center">
            <button className="px-11 h-31 w-138 border rounded-md border-opacity-borderGrey  flex items-center justify-between mr-39">
              <h5 className=" text-gray-timeRange"> 1 Jan - 1 Jun</h5>
              <img src={arrowDown} alt="" />
            </button>
            <div className="flex ">
              <img
                src={leftButton}
                alt="left button"
                className="mr-13 w-29 h-23"
              />
              <img src={rightButton} alt="right button" className="w-29 h-23" />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full grid grid-cols-6 absolute right-0">
            <h3 className=" text-black-black text-center font-bold">Jan</h3>
            <h3 className=" text-black-black text-center font-bold">Feb</h3>
            <h3 className=" text-black-black text-center font-bold">Mar</h3>
            <h3 className=" text-black-black text-center font-bold">Apr</h3>
            <h3 className=" text-black-black text-center font-bold">May</h3>
            <h3 className=" text-black-black text-center font-bold">Jun</h3>
          </div>
          <img src={bigGraph} alt="" className="w-full" />
        </div>
      </div>
      <div className=" grid grid-rows-2 gap-2">
        <ProgressItem
          title="Orders"
          first="Pending Orders:"
          firstValue="20"
          second="Reconcilled Orders:"
          secondValue="80"
          third="Total Orders:"
          thirdValue="100"
        />
        <ProgressItem
          title="Payments"
          first="Un-reconcilled Payments:"
          firstValue="20"
          second="Reconcilled Payments:"
          secondValue="80"
          third="Total Payments:"
          thirdValue="100"
        />
      </div>
    </div>
  );
};

export default ChartOverview;
