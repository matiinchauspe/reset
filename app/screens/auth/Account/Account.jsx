import React from 'react';

import { useAuth } from 'context';

import { LoadingSection } from 'components/shared';
import { UserGuest } from './UserGuest';
import { UserLogged } from './UserLogged';

const Account = () => {
  const { isLogged } = useAuth();

  if (isLogged === null) {
    return <LoadingSection />;
  }

  console.log('UUUUUUSER', isLogged);

  return isLogged ? <UserLogged /> : <UserGuest />;
};

export default Account;
