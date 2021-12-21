import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import Colors from "@utils/colors";
import AuthStack from "./auth.stack";

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case "auth":
      iconName = "account-circle";
      break;
    case "home":
      iconName = "home";
      break;
    default:
      break;
  }

  return <Icon name={iconName} size={22} color={color} />;
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
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.zircon,
      })}
    >
      <Tab.Screen
        name="auth"
        component={AuthStack}
        options={{ title: "Cuenta", headerShown: false }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigation;
