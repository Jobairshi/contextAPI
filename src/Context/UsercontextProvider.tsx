

import React, { ReactNode, useState } from 'react';
import UserContext from './UserContext';
interface User {
    username: string;
    password: string;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null); // Change initial state to User type
  return(
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;