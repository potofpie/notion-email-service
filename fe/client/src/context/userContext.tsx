import { FC, useState, useContext, createContext } from "react";
import { UserContextProps, User } from '../types'


export const UserContext = createContext<UserContextProps | undefined>(undefined);
export const UserProvider:FC = ({ children }) => {
  const [user, setUser] = useState<User>()!

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser
    }}>
      {children}
    </UserContext.Provider>
  );
};


export const useAuth = () => useContext(UserContext);