import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex w-full h-screen">
        <Sidebar />
        <div className="border flex-grow bg-gray-background pl-30 pt-33 pr-82">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
