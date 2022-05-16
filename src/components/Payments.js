import React from "react";
import { PaymentData } from "../DummyData/paymentData";
import PaymentsTableRow from "./PaymentsTableRow";
const Payments = () => {
  return (
    <div className="mt-43">
      <h1 className=" text-black-orderBlack mb-22">Payments</h1>
      <div className="border w-full">
        <h4 className=" text-black-orderBlack mr-20">Showing</h4>
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
    </div>
  );
};

export default Payments;
