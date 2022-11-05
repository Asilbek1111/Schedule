import { createContext, useState } from "react";

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [course, setCourse] = useState("");
  const [group, setGroup] = useState("");
  const [year, setYear] = useState("");
  return (
    <MyContext.Provider value={{ course, setCourse, group, setGroup, year, setYear }}>
      {children}
    </MyContext.Provider>
  );
};
