import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";
export const Us = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [iserror, setisError] = useState({ state: false, msg: "" });

  const fetchData = async (url) => {
    setLoading(true);
    setisError({ state: false, msg: "" });
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      setUserData(data);
      setLoading(false);
      setisError({ state: false, msg: "" });
      if (responce.status === 404) {
        throw new Error("data not found");
      }
    } catch (error) {
      // console.log(error.message);
      setLoading(false);
      setisError({ state: true, msg: error.message });
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>loading ... </h2>
      </div>
    );
  }
  if (iserror?.state) {
    return (
      <div style={{ textAlign: "center" }}>
        <h3 style={{ color: "red" }}>{iserror?.msg}</h3>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>use Effect</h1>
      <ul>
        {userData.map((eachItem) => {
          return (
            <li key={eachItem.id}>
              <h3>{eachItem.name}</h3>
              <h3>{eachItem.phone}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
