import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState("home");

  return (
    <AdminContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </AdminContext.Provider>
  );
};
