import React from "react";

const SidebarItems = ({ title, icon }) => {
  return (
    <button className="flex w-full h-36  items-center  ">
      <div className="pl-42  flex items-center   flex-grow">
        <img src={icon} alt="" className="mr-14" />
        <h6>{title}</h6>
      </div>
    </button>
  );
};

export default SidebarItems;
