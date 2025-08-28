import { createContext, useState } from "react";

// ✅ Export both UserContext and UserProvider
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "" , 
    fullname : {
      firstname : "" , 
      lastname : ""
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
