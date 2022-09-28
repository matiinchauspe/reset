import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from 'utils/colors';

import { Home } from 'screens/home';

const Stack = createNativeStackNavigator();

const ResetNavigation = () => (
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
      name="init"
      component={Home}
      options={{
        title: 'Inicio',
      }}
    />
  </Stack.Navigator>
);

export default ResetNavigation;
