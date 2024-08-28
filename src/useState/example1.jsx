import React, { useState } from "react";
export const Us = () => {
  // using arrays
  const data = [
    {
      id: 21,
      firstName: "Mahendra Singh",
      lastName: "Dhoni",
    },
    {
      id: 22,
      firstName: "vinay",
      lastName: "Ravula",
    },
    {
      id: 23,
      firstName: "sai",
      lastName: "tharun",
    },
    {
      id: 24,
      firstName: "uppal;",
      lastName: "balu",
    },
    {
      id: 25,
      firstName: "veera;",
      lastName: "prathap",
    },
  ];
  const [mydata, changedata] = useState(data);
  const dlt = (commingID) => {
    const filterResult = mydata.filter((eachItem) => {
      return eachItem.id !== commingID;
    });
    changedata(filterResult);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <ul>
        {mydata.map((eachItem, index) => {
          const { firstName, lastName, id } = eachItem;
          return (
            <li key={index}>
              <div>firstName : {firstName}</div>
              <div>lasttName : {lastName}</div>
              <button onClick={() => dlt(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
