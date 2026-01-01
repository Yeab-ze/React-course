import React from "react";
import { LuBluetoothSearching } from "react-icons/lu";
import { RiComputerFill } from "react-icons/ri";

const ReactIcon = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <LuBluetoothSearching className="text-blue-500 font-extrabold text-3xl cursor-pointer text-center" />
        <RiComputerFill />
      </div>
    </>
  );
};

export default ReactIcon;
