import React, { createContext, useState, useEffect, useContext, useMemo, useCallback } from 'react';

import { auth } from 'firebase-initialize';
import { AuthService } from 'services';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [hasUserLogged, setHasUserLogged] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (email, password) => {
    setLoading(true);
    const { data, error } = await AuthService.loginRequest(email, password);
    setLoading(false);

    return { data, error };
  };

  const handleSignOut = async () => {
    setLoading(true);
    const { data, error } = await AuthService.logoutRequest();
    setLoading(false);

    return { data, error };
  };

  const handleSignUp = (email, data) => AuthService.registerRequest(email, data);

  const getUser = useCallback(() => auth.currentUser, []);

  const valueToProvider = useMemo(
    () => ({
      onSignIn: handleSignIn,
      onSignOut: handleSignOut,
      onSignUp: handleSignUp,
      getUser,
      hasUserLogged,
      loading,
    }),
    [getUser, hasUserLogged, loading]
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
