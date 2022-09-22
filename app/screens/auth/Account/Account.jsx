import React from 'react';

import { useAuth } from 'context';

import { LoadingSection } from 'components/shared';
import { UserGuest } from './UserGuest';
import { UserLogged } from './UserLogged';

const Account = () => {
  const { hasUserLogged, getUser } = useAuth();
  const user = getUser();

  // NOTE: analyze this later -> "hasUserLogged" objective
  if (hasUserLogged === null) {
    return <LoadingSection />;
  }

  return user ? <UserLogged /> : <UserGuest />;
};

export default Account;
