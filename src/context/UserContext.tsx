import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
  isLoggedIn: boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsernameState] = useState<string>(() => {
    return localStorage.getItem('codeleap_username') || '';
  });

  const setUsername = (newUsername: string) => {
    setUsernameState(newUsername);
    localStorage.setItem('codeleap_username', newUsername);
  };

  const logout = () => {
    setUsernameState('');
    localStorage.removeItem('codeleap_username');
  };

  return (
    <UserContext.Provider value={{ 
      username, 
      setUsername, 
      isLoggedIn: username.length > 0,
      logout 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
