import React, { useState, useEffect } from "react";

export const Us = () => {
  const [count, setCount] = useState(0);
  const [pageWidth, setpageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const sizeHandling = () => {
      setpageWidth(window.innerWidth);
    };
    window.addEventListener("resize", sizeHandling);
    console.log("use Effet" + count);
    return () => {
      console.log("removing");
      window.removeEventListener("resize", sizeHandling);
    };
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <h1>{pageWidth}</h1>
    </div>
  );
};
