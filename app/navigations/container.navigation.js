import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Colors from 'utils/colors';

import HomeNavigation from './home.navigation';
import ResetNavigation from './reset.navigation';
import AuthNavigation from './auth.navigation';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'home':
      iconName = 'home';
      break;
    case 'reset':
      iconName = 'weight-lifter';
      break;
    case 'auth':
      iconName = 'account-circle';
      break;
    default:
      break;
  }

  return <Icon name={iconName} size={28} color={color} />;
};

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="auth"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl,
        },
        headerTintColor: Colors.white,
        tabBarStyle: {
          borderTopColor: Colors.blackPearl,
          backgroundColor: Colors.blackPearl,
        },
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.zircon,
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeNavigation}
        options={{ title: 'Inicio', headerShown: false }}
      />
      <Tab.Screen
        name="reset"
        component={ResetNavigation}
        options={{ title: 'Reset', headerShown: false }}
      />
      <Tab.Screen
        name="auth"
        component={AuthNavigation}
        options={{ title: 'Cuenta', headerShown: false }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigation;
