import React from "react";

const Progressbar = ({ value }) => {
  return (
    <div>
      <progress value={value} max={100} className="w-full" />
    </div>
  );
};

export default Progressbar;
