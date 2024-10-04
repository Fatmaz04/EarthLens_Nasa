import React from 'react';
import earth from "../Img/Earth.gif"
const Earth = ({ className }) => {
  return (
    <div className={`flex justify-center items-center m-10 ${className}`}>
      <img
        src={earth}
        alt="Rotating Earth"
        className="w-80 h-80"
      />
    </div>
  );
};

export default Earth;
