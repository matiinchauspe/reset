import React, { useEffect, useState } from 'react';
import { View, Text, Button, Center } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '@hooks';
import Colors from '@utils/colors';

import { InfoUser } from '@components/auth/account';
import { LoadingSection } from '@components/shared';

const UserLogged = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const { getUserData, onSignOut } = useAuth();
  const navigation = useNavigation();

  const handleLogout = async () => {
    await onSignOut();

    navigation.navigate('account');
  };

  const fetchUserData = async () => {
    setLoading(true);
    const userData = await getUserData();

    setUserInfo({ ...userData });
    setLoading(false);
  };

  useEffect(() => {
    console.log('entro');
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View height="100%" paddingX="40px" bgColor={Colors.charade}>
      <Center>
        {loading && <LoadingSection />}
        {userInfo && <InfoUser {...{ userInfo }} />}
        <Button mt={10} w="100%" bgColor={Colors.green} onPress={handleLogout} size={10}>
          <Text color="white" bold>
            Cerrar sesión
          </Text>
        </Button>
      </Center>
    </View>
  );
};

export default UserLogged;
