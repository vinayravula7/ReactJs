// function Name() {
//   return <h1>Hello vinay</h1>;
// }

// const Name = () => {
//   return <h1> vinay</h1>;
// };

// ReactDomc.render(<Name />, document.getElementById("root")); // appicable 17.001 verson

// root.render(
//   <>
//     <Name />
//   </>
// ); also use

// Time
// setInterval(() => {
//   root.render(<Vinny />);
// }, 1000);

// const Img = () => {
//   return <img src={pic} alt="pic" />;
// };

import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { Parent } from "./propsDrilling/drillingEx2";
import { Vinny } from "./App";
import { UserContextProvider } from "./useContext/userContext";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <UserContextProvider>
    <Vinny />
  </UserContextProvider>
);
