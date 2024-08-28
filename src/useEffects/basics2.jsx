import React, { useState, useEffect } from "react";

export const Us = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("use Effet" + count);
  }, [count, toggle]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h2
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "close" : "open"}
      </h2>
    </div>
  );
};
