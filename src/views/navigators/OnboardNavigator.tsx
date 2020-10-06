import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardScreen } from "@screens/index";

export type OnboardStackParams = {
  Onboard: undefined;
};

const Stack = createStackNavigator<OnboardStackParams>();

export default function OnboardNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Onboard"
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}
    >
      <Stack.Screen name="Onboard" component={OnboardScreen} />
    </Stack.Navigator>
  );
}

export { OnboardNavigator };
