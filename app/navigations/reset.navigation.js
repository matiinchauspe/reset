import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from 'utils/colors';

import { ResetScreen as Reset } from 'screens/Reset';

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
      name="what-is-reset"
      component={Reset}
      options={{
        title: 'Reset',
      }}
    />
  </Stack.Navigator>
);

export default ResetNavigation;
