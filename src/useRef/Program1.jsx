import React, { useState, useEffect, useRef } from "react";

export const Final = () => {
  const [firstName, setfirstName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    // console.log(renderCount);
  });

  return (
    <div>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e) => {
          setfirstName(e.target.value);
        }}
      />
      <h4>Typing: {firstName}</h4>
      <h5>Rendering count is {renderCount.current}</h5>
    </div>
  );
};
