import React, { useState } from "react";

export const RegisterContext = React.createContext("Hi there");

export default function RegisteredContextProvider(props) {
  const [register, setRegister] = useState("context");

  return (
    <RegisterContext.Provider value={[register, setRegister]} {...props} />
  );
}
