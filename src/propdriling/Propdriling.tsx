import React from "react";
import MainDriling from "./MainDriling";

const Propdriling = ({ user }) => {
  return (
    <>
      <h3>Prop Drilling Component</h3>
      <p>User name: {user}</p>
    </>
  );
};

export default Propdriling;
