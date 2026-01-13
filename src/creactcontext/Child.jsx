import React from "react";
import ToyContext from "./ToyContext";

const Child = () => {
  return (
    <ToyContext.Consumer>
      {toy => (
        <div>
          <h2>Child Component</h2>
          <p>The toy from context is: {toy}</p>
        </div>
      )}
    </ToyContext.Consumer>
  );
};

export default Child;
