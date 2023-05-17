import React, { ReactNode, createContext, useContext } from "react";
import * as AuthSession from "expo-auth-session";

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
  signInWithGoogle(): Promise<void>;
}

const AuthContext = createContext({} as IAuthProviderProps);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: "12121212",
    name: "Cleyton Costa",
    email: "cleyton@gmail.com",
  };

  async function signInWithGoogle() {
    try {
      const CLIENT_ID =
        "411984150942-hvmjtdni43dks0sohbhrc1cqk4fd2gtd.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@cleyton-costa/GoFinances";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const response = await AuthSession.startAsync({ authUrl });

      console.log(response);
    } catch (error) {
      // throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
