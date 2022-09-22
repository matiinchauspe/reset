import React, { createContext, useState, useEffect, useContext, useMemo, useCallback } from 'react';

import { auth } from 'firebase-initialize';
import { AuthService } from 'services';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [hasUserLogged, setHasUserLogged] = useState(null);

  const handleSignIn = async (email, password) => {
    const { data, error } = await AuthService.loginRequest(email, password);

    return { data, error };
  };

  const handleSignOut = () => AuthService.logoutRequest();

  const handleSignUp = (email, data) => AuthService.registerRequest(email, data);

  const getUser = useCallback(() => auth.currentUser, []);

  const valueToProvider = useMemo(
    () => ({
      onSignIn: handleSignIn,
      onSignOut: handleSignOut,
      onSignUp: handleSignUp,
      user: getUser,
      hasUserLogged,
    }),
    [getUser, hasUserLogged]
  );

  const checkUserLogged = async () => {
    const isUserLogged = await AuthService.onAuthStateInit();
    setHasUserLogged(isUserLogged);
  };

  useEffect(() => {
    checkUserLogged();
  }, []);

  return <AuthContext.Provider value={valueToProvider}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
