import React from "react";

const PowerConsumption = ({ text, displayProcess }) => {
  return (
    <div className="powerconsumption">
      <div className="text" onClick={displayProcess}>
        {text}
      </div>
    </div>
  );
};

export default PowerConsumption;
