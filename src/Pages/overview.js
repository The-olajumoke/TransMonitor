import React from "react";
import DashboardItems from "../components/DashboardItems";
import Layout from "../components/Layout";
import bigGraph from "../Images/bigGraph.svg";

const Overview = () => {
  return (
    <Layout>
      <div>
        <div className="gap-14 flex items-center mb-27">
          <div className=" grid gap-3  grid-cols-2 w-1/2">
            <DashboardItems title="Daily Transaction Volume" amount="2,342" />
            <DashboardItems
              title="Daily Transaction Value"
              amount="₦4,000,000"
            />
          </div>
          <div className=" grid gap-3  grid-cols-2 w-1/2">
            <DashboardItems title="Total Transaction Volume" amount="452,000" />
            <DashboardItems
              title="Total Transaction Value"
              amount="₦4,000,000"
            />
          </div>
        </div>
        <div className="h-329 border  rounded-sm grid grid-cols-3 gap-2">
          <div className=" col-span-2 bg-white-white">
            <div className="border px-34 pt-26 mb-45 flex">
              <h2 className=" text-black-blackGrey font-medium">
                Today: 5, Aug 2018
              </h2>
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
          <div className="bg-white-white"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
