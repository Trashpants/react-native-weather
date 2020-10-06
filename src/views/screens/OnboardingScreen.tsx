import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { OnboardStackParams } from "@navigators/OnboardNavigator";

interface OnboardScreenProps {
  navigation: StackNavigationProp<OnboardStackParams, "Onboard">;
  route: RouteProp<OnboardStackParams, "Onboard">;
}

export default function OnboardScreen({}: OnboardScreenProps) {
  return (
    <>
      <View>
        <Text>Onboard</Text>
      </View>
    </>
  );
}
export { OnboardScreen };
