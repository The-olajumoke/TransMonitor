import React from "react";
import Logo from "../Images/logo.svg";
import User from "../Images/user_icon.svg";
import search from "../Images/search.svg";
import Notification from "../Images/notification_icon.svg";
const Header = () => {
  return (
    <div className=" h-60 pl-42 pr-80 shadow-lg flex justify-between items-center w-full bg-white-white">
      <div className="flex">
        <div className=" flex items-center w-153 mr-66">
          <img src={Logo} alt="Logo" />
        </div>
        <div className=" ml-30 flex">
          <img src={search} alt="" className="mr-16 w-12" />
          <input
            type="text"
            className=" text-gray-placeHolder text-sm"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center">
        <h3 className="mr-36">Support</h3>
        <h3 className="mr-55">FAQ</h3>
        <img src={Notification} alt="Logo" className="mr-48" />
        <div className="flex">
          <div className="flex flex-col items-end justify-center mr-9">
            <h6 className="">Hello</h6>
            <h3 className="m-0  p-0 leading-none">Oluwaleke Ojo</h3>
          </div>
          <img src={User} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
