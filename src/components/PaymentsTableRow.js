import React from "react";
import arrowDown from "../Images/arrow_big.svg";
const PaymentsTableRow = ({
  type,
  itemName,
  price,
  transactionNo,
  time,
  status,
}) => {
  return (
    <div className=" bg-white-white px-26 py-12 h-76 grid grid-cols-7 items-center border-b border-gray-borderLine text-lg last-of-type:border-none">
      <div className=" col-span-3 text-gray-timeRange text-lg flex  items-center">
        <div className=" bg-gray-timeRange rounded-full h-36 w-36 mr-36 text-white-white  text-sm flex justify-center items-center">
          {type}
        </div>
        <h3 className=" text-gray-paymentName">{itemName}</h3>
      </div>
      <div className="text-gray-timeRange text-lg ">{price}</div>
      <div className="text-gray-timeRange text-lg">{transactionNo}</div>
      <div className="text-gray-timeRange text-lg">{time}</div>
      <div className="text-gray-timeRange text-lg flex items-center justify-between ">
        <div className="border border-gray-borderLine flex items-center  rounded-lg w-130 justify-start mr-8 px-4 pl-12 h-33">
          <div
            className={`h-9 w-9 mr-8 rounded-full ${
              status === "Pending" && " bg-primary-pureOrange"
            }
             ${status === "Reconcilled" && " bg-primary-limeGreen"}
             ${status === "Un-reconcilled" && " bg-gray-status"}
            `}
          ></div>
          <h3
            className={`${status === "Pending" && " text-primary-pureOrange"}
              ${status === "Reconcilled" && " text-primary-limeGreen"}
                   ${status === "Un-reconcilled" && " text-gray-timeRange"}
            `}
          >
            {status}
          </h3>
        </div>
        <div className="w-26 h-26 ">
          <img src={arrowDown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PaymentsTableRow;
