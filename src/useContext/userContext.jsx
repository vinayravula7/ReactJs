import React from "react";
export const UserContext = React.createContext();

const initialState = {
  firstName: "ravula",
  lastName: "vinau",
  email: "vinny@email.com",
};
export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};
