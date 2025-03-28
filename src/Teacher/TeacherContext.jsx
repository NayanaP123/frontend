import { createContext, useState } from "react";

export const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("home");

  return (
    <TeacherContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </TeacherContext.Provider>
  );
};
