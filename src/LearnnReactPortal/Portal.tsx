import React, { useState } from "react";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const Portal = () => {
  const [sw, setSw] = useState(false);

  const handleTheme = () => {
    setSw(prev => !prev);
  };

  return (
    <div
      className={`p-6 items-center flex rounded ${
        sw ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h2>Make dark and light switch</h2>

      <p onClick={handleTheme} className=" outline-2 rounded-full cursor-pointer p-3 ml-2">{sw ? <CiSun /> :  <FaMoon />}</p>
    </div>
  );
};

export default Portal;
