import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';

import { auth } from 'firebase-initialize';
import { AuthService } from 'services';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async (email, password) => {
    setLoading(true);
    const { error: userError } = await AuthService.loginRequest(email, password);
    debugger; // eslint-disable-line
    setLoading(false);

    return setError(userError);
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
      error,
      loading,
    }),
    [getUser, error, loading]
  );

  return <AuthContext.Provider value={valueToProvider}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
