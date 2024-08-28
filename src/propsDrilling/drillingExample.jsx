import React, { useState } from "react";

export const ParentComponent = () => {
  const [data, setData] = useState({
    firstName: "MS",
    lastName: "Dhoni",
    email: "mahi07@gmail.com",
  });
  return (
    <div>
      <h1>parent</h1>
      <ChildComponent userdetails={data} />
    </div>
  );
};
const ChildComponent = (porps) => {
  console.log(porps.userdetails);
  return (
    <div>
      <h1>ChildComponent</h1>
      <SubChildComponent userdetails={porps.userdetails} />
    </div>
  );
};
const SubChildComponent = (props) => {
  console.log(props.userdetails);
  return (
    <div>
      <h1>SubChildComponent</h1>
      <h4>{props.userdetails.firstName}</h4>
      <h4>{props.userdetails.lastName}</h4>
      <h4>{props.userdetails.email}</h4>
    </div>
  );
};
