import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from 'utils/colors';

import { Login, Register } from 'screens/auth';

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
