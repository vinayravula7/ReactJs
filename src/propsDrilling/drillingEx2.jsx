import React from "react";

// export const A = () => {
//   const data = "A component Data";
//   return (
//     <div>
//       <h1>A-component</h1>
//       <B values={data} />
//     </div>
//   );
// };
// const B = (props) => {
//   return (
//     <div>
//       <h1>B-component</h1>
//       <C values={props.values} />
//     </div>
//   );
// };
// const C = (props) => {
//   return (
//     <div>
//       <h1>C-component</h1>
//       <D values={props.values} />
//     </div>
//   );
// };
// const D = (props) => {
//   return (
//     <div>
//       <h1>D-component</h1>
//       <E values={props.values} />
//     </div>
//   );
// };
// const E = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>E-component</h1>
//       <h3>Finally Got{props.values}</h3>
//     </div>
//   );
// };

export const Parent = () => {
  const data = "data";
  return (
    <div>
      <h1>Parent</h1>
      <NthChild mydata={data} />
    </div>
  );
};
const Child = () => {
  return (
    <div>
      <h1>Child</h1>
    </div>
  );
};
const NthChild = (props) => {
  return (
    <div>
      <h1>Nth child</h1>
      <h1>{props.mydata}</h1>
    </div>
  );
};
