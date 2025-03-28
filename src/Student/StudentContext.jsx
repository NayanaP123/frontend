import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("home");

  return (
    <StudentContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </StudentContext.Provider>
  );
};
