import { createContext, useState } from "react";

export const MyContext = createContext();

export const ProviderContext = ({ children }) => {
  const [course, setCourse] = useState("");
  const [group, setGroup] = useState("");
  return (
    <MyContext.Provider value={{ course, setCourse, group, setGroup }}>
      {children}
    </MyContext.Provider>
  );
};
