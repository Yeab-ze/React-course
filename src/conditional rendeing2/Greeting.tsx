import React from "react";

const Greeting = ({ timeOfDay }) => {
  return (
    <div>
      {timeOfDay === "morinig" ? 
        <h2>Good morinig</h2>
       : 
        <h2>Good afternoon</h2>
      }
    </div>
  );
};

export default Greeting;
