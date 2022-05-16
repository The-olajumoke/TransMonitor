import React from "react";
import Progressbar from "./Progressbar";

const ProgressItem = ({
  title,
  first,
  firstValue,
  second,
  secondValue,
  third,
  thirdValue,
}) => {
  return (
    <div className="p-25 bg-white-white flex justify-center flex-col">
      <h3 className=" text-black-orderBlack font-bold mb-11">{title}</h3>
      <Progressbar value={80} />
      <div>
        <h3 className=" text-black-orderBlack mb-11">
          {first}{" "}
          <span className=" text-primary-pureOrange font-bold">
            {firstValue}
          </span>
        </h3>
        <h3 className=" text-black-orderBlack mb-11">
          {second}{" "}
          <span className=" text-primary-limeGreen font-bold">
            {secondValue}
          </span>
        </h3>
        <h3 className=" text-black-orderBlack ">
          {third}{" "}
          <span className=" text-primary-blue font-bold">{thirdValue}</span>
        </h3>
      </div>
    </div>
  );
};

export default ProgressItem;
