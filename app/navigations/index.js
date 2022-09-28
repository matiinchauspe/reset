import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import Colors from 'utils/colors';

import HomeNavigation from './home.navigation';
import ResetNavigation from './reset.navigation';
import AuthNavigation from './auth.navigation';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  const iconName = {
    home: 'home',
    reset: 'dumbbell',
    auth: 'user-alt',
  };

  return <Icon name={iconName[route.name] || 'home'} size={25} color={color} />;
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
          paddingTop: 2,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.zircon,
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeNavigation}
        options={{
          title: 'Inicio',
          headerShown: false,
        }}
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
