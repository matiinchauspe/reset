// eslint-disable-next-line no-unused-vars
import { createContext, useState, useContext } from 'react';

import { auth } from 'firebase-initialize';
import { AuthService } from 'services';

export const AuthContext = createContext();

/* eslint-disable */ // TODO: remove later
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleSignIn = (email, password) => AuthService.loginRequest(email, password);

  const handleSignOut = () => AuthService.logoutRequest();

  const handleSignUp = (email, data) => AuthService.registerRequest(email, data);

  const getUser = () => auth.currentUser;

  return (
    <AuthContext.Provider
      value={{
        onSignIn: handleSignIn,
        onSignOut: handleSignOut,
        onSignUp: handleSignUp,
        user: getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
