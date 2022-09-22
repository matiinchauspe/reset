import React from 'react';

import { useAuth } from 'context';

import { LoadingSection } from 'components/shared';
import { UserGuest } from './UserGuest';
import { UserLogged } from './UserLogged';

const Account = () => {
  const { hasUserLogged } = useAuth();

  if (hasUserLogged === null) {
    return <LoadingSection />;
  }

  return hasUserLogged ? <UserLogged /> : <UserGuest />;
};

export default Account;
