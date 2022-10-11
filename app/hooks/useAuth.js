import { useContext } from 'react';
import { AuthContext } from '@context';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("'AuthContext' cannot be null");
  }

  return context;
};
