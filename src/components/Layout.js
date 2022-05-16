import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex-col w-full ">
        <div className="h-60"></div>
        <Sidebar />
        <div className="flex w-full">
          <div className="w-260 "></div>
          <div className=" flex-grow bg-gray-background pl-30 pt-33 pr-80 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
