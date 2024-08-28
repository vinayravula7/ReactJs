import React, { useState } from "react";

export const Us = () => {
  const [showData, setShowData] = useState(false);

  const show = () => {
    setShowData(!showData);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={show}>{showData ? "hide" : "show"} </button>
      {/* {data && (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea
          repellendus rem! Voluptatum quibusdam recusandae itaque laborum quae
          saepe nisi.
        </div>
      )} */}
      {showData ? (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea
          repellendus rem! Voluptatum quibusdam recusandae itaque laborum quae
          saepe nisi.
        </div>
      ) : (
        <h2> data is hide</h2>
      )}
    </div>
  );
};
