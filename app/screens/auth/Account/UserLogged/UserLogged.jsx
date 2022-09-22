import React from 'react';
import { View, Text, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from 'context';
import Colors from 'utils/colors';

import { InfoUser } from 'components/auth/account';

const UserLogged = () => {
  const { getUser, onSignOut, loading } = useAuth();
  const userInfo = getUser();
  const navigation = useNavigation();

  const handleLogout = async () => {
    await onSignOut();

    navigation.navigate('account');
  };

  return (
    <View height="100%" bgColor={Colors.charade}>
      <View m={10}>
        {userInfo && <InfoUser {...{ userInfo }} />}
        <Text>Account options here</Text>
        <Button
          mt={10}
          w="100%"
          bgColor={Colors.green}
          onPress={handleLogout}
          spinnerPlacement="end"
          isLoading={loading}
          size={10}
          _text={{ color: 'white', fontWeight: 'bold' }}
        >
          {/*eslint-disable-line */}
          Cerrar sesión
        </Button>
      </View>
    </View>
  );
};

export default UserLogged;
