import { createContext, useState } from "react";

// Step 1: Create a Context
export const AppContext = createContext();

// Step 2: Create Provider Component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState("Nithya Sri");

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
