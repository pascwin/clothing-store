import { createContext, ReactNode, useEffect, useState } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

// type UserContextType = {
//     currentUser: any
// }

export const UserContext = createContext<any>({
  currentUser: null,
  setCurrentUser: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user)
    });
    return unsubscribe
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
