import React, { useState } from "react";
import { PaymentData } from "../DummyData/paymentData";
import PaymentsTableRow from "./PaymentsTableRow";
import search from "../Images/search.svg";
import arrowBlue from "../Images/arrowBlue.svg";
const Payments = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="mt-43 mb-31">
      <h1 className=" text-black-orderBlack mb-22">Payments</h1>
      <div className="w-full flex items-center mb-23">
        <h4 className=" text-black-orderBlack mr-20">Showing</h4>
        <div className="flex items-center  gap-2 mr-57">
          <h4 className=" text-primary-blue">20</h4>
          <img src={arrowBlue} alt="" />
          <h4 className=" text-black-orderBlack">out of 500 payments</h4>
        </div>
        <div className="p-9 flex border-b  w-336  mr-150 border-gray-borderLine ">
          <img src={search} alt="" className=" outline-none mr-7 w-12" />
          <input
            type="text"
            className=" text-gray-placeHolder text-sm bg-transparent"
            placeholder="Search payments"
          />
        </div>
        <h4 className="mr-16 text-black-black">Show</h4>
        <div className="relative">
          <button
            className="w-150 flex justify-between py-8 px-16 h-35 border border-gray-borderLine items-center"
            onClick={() => setOpenDropdown(true)}
          >
            <h4>All</h4>
            <img src={arrowBlue} alt="" />
          </button>
          {openDropdown && (
            <div>
              <div
                className={`fixed h-screen w-screen top-0 left-0 bg-other-overlay animate-fade-in z-9999`}
                onClick={() => setOpenDropdown(false)}
              ></div>
              <div
                className={`w-150  border border-gray-borderLine bg-white-white rounded absolute z-9999`}
              >
                <div
                  className="flex items-center mb-8 cursor-pointer py-8 px-18 hover:bg-gray-hover"
                  onClick={() => {
                    setOpenDropdown(!openDropdown);
                  }}
                >
                  <h3 className="">All</h3>
                </div>

                <div
                  className="flex items-center mb-8 cursor-pointer py-8 px-18 hover:bg-gray-hover"
                  onClick={() => {
                    setOpenDropdown(!openDropdown);
                  }}
                >
                  <h3 className="">Reconcilled</h3>
                </div>

                <div
                  className="flex items-center mb-8 cursor-pointer py-8 px-18 hover:bg-gray-hover"
                  onClick={() => {
                    setOpenDropdown(!openDropdown);
                  }}
                >
                  <h3 className="">Un-reconcilled</h3>
                </div>
                <div
                  className="flex items-center mb-8 cursor-pointer py-8 px-18 hover:bg-gray-hover"
                  onClick={() => {
                    setOpenDropdown(!openDropdown);
                  }}
                >
                  <h3 className="">Settled</h3>
                </div>

                <div
                  className="flex items-center mb-8 cursor-pointer py-8 px-18 hover:bg-gray-hover"
                  onClick={() => {
                    setOpenDropdown(!openDropdown);
                  }}
                >
                  <h3 className="">Unsettled</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* HEADER */}
      <div>
        <div className=" bg-gray-paymentHeader px-26 py-12 h-42 grid grid-cols-7">
          <div className="col-span-3 text-gray-timeRange text-lg">
            Item Type
          </div>
          <div className="text-gray-timeRange text-lg ">Price</div>
          <div className="text-gray-timeRange text-lg">Transaction No</div>
          <div className="text-gray-timeRange text-lg">Time</div>
          <div className="text-gray-timeRange text-lg">Status</div>
        </div>
        {PaymentData.map((data, index) => (
          <PaymentsTableRow
            type={data.type}
            itemName={data.itemName}
            price={data.price}
            transactionNo={data.transactionNo}
            time={data.time}
            status={data.status}
            map={index}
          />
        ))}
      </div>
      <div className=" flex justify-between mt-31 mb-72">
        <h4>Showing 1 to 10 of 500 entries</h4>
        <div>
          <button className="px-13 py-6 border border-gray-borderLine text-md">
            Previous
          </button>
          <button className="px-13 py-6 border border-gray-borderLine text-md  bg-primary-blue text-white-white">
            1
          </button>
          <button className="px-13 py-6 border border-gray-borderLine text-md">
            2{" "}
          </button>
          <button className="px-13 py-6 border border-gray-borderLine text-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
