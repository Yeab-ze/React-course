import React from "react";
import ComponentsC from "./ComponentsC";

const ComponentsB = ({ username }) => {
  return (
    <div>
      <p>
        <h2>Component B</h2>
      </p>
      <ComponentsC username={username} />
    </div>
  );
};

export default ComponentsB;
