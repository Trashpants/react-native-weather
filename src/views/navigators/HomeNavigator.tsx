import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

export type HomeStackParams = {
  Dashboard: undefined;
};

const Stack = createStackNavigator<HomeStackParams>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}
    >
      <Stack.Screen name="Dashboard" component={() => <View />} />
    </Stack.Navigator>
  );
}

export { HomeNavigator };
