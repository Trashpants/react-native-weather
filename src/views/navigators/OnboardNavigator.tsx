import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardScreen, StorybookScreen } from "@screens/index";

export type OnboardStackParams = {
  Onboard: undefined;
  Storyboard: undefined;
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
      <Stack.Screen name="Storyboard" component={StorybookScreen} />
    </Stack.Navigator>
  );
}

export { OnboardNavigator };
