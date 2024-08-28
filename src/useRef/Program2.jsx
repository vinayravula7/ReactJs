import React, { useState, useEffect, useRef } from "react";

export const Final = () => {
  const [firstName, setfirstName] = useState("");
  const inputDom = useRef("");

  useEffect(() => {
    // it will print element
    console.log(inputDom);
  });
  const focus = () => {
    // element is in the current
    inputDom.current.focus();
  };

  return (
    <div>
      <input
        ref={inputDom}
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e) => {
          setfirstName(e.target.value);
        }}
      />
      <h4>Typing: {firstName}</h4>
      <button onClick={focus}>focus</button>
    </div>
  );
};
