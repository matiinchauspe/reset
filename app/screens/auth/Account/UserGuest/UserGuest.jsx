import React from 'react';
import { View, Center, Button, Box, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import Colors from 'utils//colors';
import { Logo } from 'components/auth/Logo';

const UserGuest = () => {
  const navigation = useNavigation();

  const goToProfile = () => navigation.navigate('login');

  return (
    <View height="100%" backgroundColor={Colors.zircon}>
      <Center>
        <Logo />
        <Text fontSize={19} mt={10} mb={5} bold color="emerald.500">
          Consulta tu perfil de Reset
        </Text>

        <Text bold color="red.300">
          Mira acerca de los planes que poder seguir y más.
        </Text>
        <Box w="1/2" mt={5}>
          <Button bgColor={Colors.carmine} onPress={goToProfile}>
            <Text color="white" bold>
              Ver mi perfil
            </Text>
          </Button>
        </Box>
      </Center>
    </View>
  );
};

export default UserGuest;
