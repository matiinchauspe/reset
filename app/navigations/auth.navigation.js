import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '@utils/colors';

import { Account, Login, Register } from '@screens/auth';

const Stack = createNativeStackNavigator();

const AccountStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.blackPearl,
        shadowColor: Colors.blackPearl,
      },
      headerTintColor: Colors.white,
    }}
  >
    <Stack.Screen name="account" component={Account} options={{ title: 'Mi cuenta' }} />
    <Stack.Screen
      name="login"
      component={Login}
      options={{
        title: 'Iniciar sesión',
      }}
    />
    <Stack.Screen
      name="register"
      component={Register}
      options={{
        title: 'Registrarse',
      }}
    />
  </Stack.Navigator>
);

export default AccountStack;
