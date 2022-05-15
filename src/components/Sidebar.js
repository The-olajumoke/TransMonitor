import React from "react";
import overview from "../Images/overview.svg";
import allPayment from "../Images/allPayment.svg";
import reconciled from "../Images/reconciled.svg";
import unreconciled from "../Images/unreconciled.svg";
import manual from "../Images/manual.svg";
import allOrders from "../Images/allOrders.svg";
import pending from "../Images/pending.svg";
import reconciledOrder from "../Images/reconciledOrder.svg";
import merchant from "../Images/merchant.svg";
import SidebarItems from "./SidebarItems";
const Sidebar = () => {
  return (
    <div className=" w-260 pt-33">
      <button className="w-163 h-33 mb-32 bg-primary-limeGreen text-white-white text-sm py-9 px-26  rounded-lg  font-bold leading-3 ml-42">
        GENERATE INVOICE
      </button>
      <div className="">
        <div className="mb-35">
          <h6 className="mb-14 ml-42">Main</h6>
          <div className="flex w-full h-36 ">
            <div className="w-4 bg-primary-blue"></div>
            <div className="pl-38  flex items-center bg-opacity-blue  flex-grow">
              <img src={overview} alt="" className="mr-14" />
              <h6>Overview</h6>
            </div>
          </div>
        </div>
        <div className="mb-35">
          <h6 className="mb-14 ml-42">Payments</h6>
          <SidebarItems title="All Payments" icon={allPayment} />
          <SidebarItems title="Reconcilled Payments" icon={reconciled} />
          <SidebarItems title="Un - Reconcilled Payments" icon={unreconciled} />
          <SidebarItems title="Manual SettlementPayments" icon={manual} />
        </div>
        <div className="mb-35">
          <h6 className="mb-14 ml-42">Orders</h6>
          <SidebarItems title="All Orders" icon={allOrders} />
          <SidebarItems title="Pending Orders" icon={pending} />
          <SidebarItems title="Reconcilled Orders" icon={reconciledOrder} />
          <SidebarItems title="Merchant Profile" icon={merchant} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
