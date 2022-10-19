import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthProvider } from '@context';
import { auth } from '@firebase-utils/firebase.init';
import { Queries, Constants } from '@firebase-utils';
import { AccountService, AccountTransform } from '@services';

const AuthenticationProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (email, password) => {
    setLoading(true);
    const { data, error } = await AccountService.loginRequest(email, password);
    setLoading(false);

    return { data, error };
  };

  const handleSignInWithFacebook = async () => {
    const { data, error } = await AccountService.loginWithFacebookRequest();
    debugger; // eslint-disable-line

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

  const getUserData = useCallback(async () => {
    const currentUser = await getUser();
    if (!currentUser) return;

    const currentUserExtraData = await Queries.getDocument({
      collectionName: Constants.COLLECTION_NAMES.USERS,
      id: currentUser.uid,
    });
    const userData = { ...currentUser, ...currentUserExtraData };

    // Transform and return the information
    return AccountTransform.UserResponseTransform(userData);
  }, [getUser]);

  const valueToProvider = useMemo(
    () => ({
      onSignIn: handleSignIn,
      onSignInThroughFB: handleSignInWithFacebook,
      onSignOut: handleSignOut,
      onSignUp: handleSignUp,
      isLogged,
      loading,
      getUserData,
    }),
    [isLogged, loading, getUserData]
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
