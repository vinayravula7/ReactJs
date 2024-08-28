import React, { useState } from "react";

export const Us = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const changeName = (e) => {
  //     console.log(e.target.value);
  //     setName(e.target.value);
  //   };
  //   const changeEmail = (e) => {
  //     console.log(e.target.value);
  //     setEmail(e.target.value);
  //   };
  //   const changePassword = (e) => {
  //     console.log(e.target.value);
  //     setPassword(e.target.value);
  //   };

  // const handlingInput = (e, name) => {
  //   console.log(e.target.value, name);
  //   if (name === "name") {
  //     setName(e.target.value);
  //   } else if (name === "email") {
  //     setEmail(e.target.value);
  //   } else if (name === "password") {
  //     setPassword(e.target.value);
  //   }
  // };

  const sub = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      email: email,
      password: password,
    };
    console.log(obj);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            // onChange={(e) => handlingInput(e, "name")}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter yourname"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            // onChange={(e) => handlingInput(e, "email")}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            // onChange={(e) => handlingInput(e, "password")}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
          />
        </div>
        <div>
          <button onClick={sub}>submit</button>
        </div>
      </form>
    </div>
  );
};
