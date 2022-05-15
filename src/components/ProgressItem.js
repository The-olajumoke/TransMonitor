import React from "react";
import Progressbar from "./Progressbar";

const ProgressItem = ({ title }) => {
  return (
    <div className="p-25 bg-white-white">
      <h3 className=" text-black-orderBlack font-bold">{title}</h3>
      <Progressbar value={80} />
    </div>
  );
};

export default ProgressItem;
