import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "DELETE_PERSON") {
    const newPersons = state.data.filter((eachPerson) => {
      const { id } = eachPerson;
      return id !== action.payload;
    });
    return {
      ...state,
      data: newPersons,
      length: state.length - 1,
    };
  }
};
export const Us = () => {
  const initialState = {
    data: [
      {
        id: 343,
        firstName: "ravula",
        lastName: "vinay",
        email: "vinay@gmail.com",
      },
      {
        id: 3453,
        firstName: "mahendra singh",
        lastName: "dhoni",
        email: "mahi@gmail.com",
      },
    ],
    length: 2,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };
  return (
    <div>
      <h1>Lenght is {state.length}</h1>
      {state.data.map((eachItem) => {
        const { id, firstName, lastName, email } = eachItem;
        return (
          <div key={id}>
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
            <h2>{email}</h2>
            <button onClick={() => handleDelete(id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};
