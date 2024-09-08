import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  // Retrieve user data from local storage when the app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("userToken");
    if (storedUser) {
      setUserData(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
