import { createContext, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config/firebase";

interface AuthContextProps {
  currentUser: User | null;
  setCurrentUser: any | null;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  setCurrentUser: null,
});

export const AuthContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
