import React, { useState } from "react";

export const Us = () => {
  const [count, setCount] = useState(0);
  const increament = () => {
    // setCount(count + 2);
    setCount(function te(prev) {
      return prev + 1;
    });
    // setCount((prev) => {
    //   return prev + 1;
    // });
  };
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <button>-</button>
      <span>{count}</span>
      <button onClick={increament}>+</button>
    </div>
  );
};
