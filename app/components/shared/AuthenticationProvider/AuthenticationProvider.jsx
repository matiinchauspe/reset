import React, { useState, useEffect, useMemo, useCallback } from 'react';

import { collection, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthProvider } from 'context';
import { auth, db } from 'firebase-initialize';
import { AccountService } from 'services';

const AuthenticationProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (email, password) => {
    setLoading(true);
    const { data, error } = await AccountService.loginRequest(email, password);
    setLoading(false);

    return { data, error };
  };

  const handleSignOut = async () => {
    setLoading(true);
    await AccountService.logoutRequest();
    setLoading(false);
  };

  const handleSignUp = async (userData) => {
    setLoading(true);
    const { data, error } = await AccountService.registerRequest(userData);
    setLoading(false);

    return { data, error };
  };

  const getUser = useCallback(async () => auth.currentUser, []);

  const getUserExtraInfo = useCallback(async (userId) => {
    if (!userId) return;
    // TODO: move this to queries/helpers later
    const colRef = collection(db, 'users_information');
    const result = await getDoc(doc(colRef, userId));

    return result.data();
  }, []);

  const valueToProvider = useMemo(
    () => ({
      onSignIn: handleSignIn,
      onSignOut: handleSignOut,
      onSignUp: handleSignUp,
      isLogged,
      loading,
      getUser,
      getUserExtraInfo,
    }),
    [isLogged, loading, getUser, getUserExtraInfo]
  );

  const checkUserLogged = () => {
    onAuthStateChanged(auth, (user) => {
      setIsLogged(Boolean(user));
    });
  };

  useEffect(() => {
    checkUserLogged();
  }, []);

  return <AuthProvider value={valueToProvider}>{children}</AuthProvider>;
};

export default AuthenticationProvider;
