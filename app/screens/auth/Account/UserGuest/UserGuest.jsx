import React from 'react';
import { View, Center, Button, Box, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import Colors from 'utils//colors';
import { Logo } from 'components/auth/Logo';

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable  react-native/no-raw-text */

const UserGuest = () => {
  const navigation = useNavigation();

  const goToProfile = () => navigation.navigate('login');

  return (
    <View height="100%" backgroundColor={Colors.zircon}>
      <Center>
        <Logo />
        <Text fontSize={19} mt={10} mb={1} color="emerald.500">
          Consulta tu perfil de <Text fontWeight="300">Reset</Text>
        </Text>

        <Text fontFamily="body" fontSize={15} color="white">
          Mira acerca de los planes que poder seguir y más.
        </Text>
        <Box w="1/2" mt={20}>
          <Button bgColor={Colors.carmine} onPress={goToProfile}>
            <Text color="white" bold>
              Ir a mi perfil
            </Text>
          </Button>
        </Box>
      </Center>
    </View>
  );
};

export default UserGuest;
