import React, { useState, useEffect } from "react";

export const Us = () => {
  const [count, setCount] = useState(0);

  // execute when you refresh it or mount
  // execute when state is update, if you not specify dependencies
  useEffect(() => {
    console.log("use Effet" + count);
  }, [count]);

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
    </div>
  );
};
