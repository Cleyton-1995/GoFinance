import React, { ReactNode, createContext, useContext } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthProviderProps {
  user: User;
}

const AuthContext = createContext({} as IAuthProviderProps);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: "12121212",
    name: "Cleyton Costa",
    email: "cleyton@gmail.com",
  };

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
