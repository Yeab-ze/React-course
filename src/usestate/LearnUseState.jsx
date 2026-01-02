import React, { useState } from "react";

const LearnUseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const dncrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={dncrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default LearnUseState;
