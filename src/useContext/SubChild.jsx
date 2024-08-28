import React, { useContext } from "react";
import { UserContext } from "./userContext";

export const SubChild = () => {
  const data = useContext(UserContext);
  console.log(data);
  return (
    <div>
      <h1>subhild</h1>
      <h1>{data.firstName}</h1>
    </div>
  );
};
