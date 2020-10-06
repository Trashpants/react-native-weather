import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

import HomeNavigator from "./HomeNavigator";
import OnboardNavigator from "./OnboardNavigator";

export default function RootNavigator() {
  const scheme = useColorScheme();

  return (
    <>
      <StatusBar
        style={scheme === "light" ? "dark" : "light"}
        backgroundColor="#fff"
        translucent
      />
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        {true ? <OnboardNavigator /> : <HomeNavigator />}
      </NavigationContainer>
    </>
  );
}

export { RootNavigator };
