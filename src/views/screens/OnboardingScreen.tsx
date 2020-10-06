import React from "react";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useTheme } from "@react-navigation/native";
import { OnboardStackParams } from "@navigators/OnboardNavigator";

interface OnboardScreenProps {
  navigation: StackNavigationProp<OnboardStackParams, "Onboard">;
  route: RouteProp<OnboardStackParams, "Onboard">;
}

export default function OnboardScreen({}: OnboardScreenProps) {
  const theme = useTheme();
  const StyledView = styled.View`
    background-color: #abc;
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  const StyledText = styled.Text`
    color: ${theme.colors.text};
  `;

  return (
    <>
      <StyledView>
        <StyledText>Onboard</StyledText>
      </StyledView>
    </>
  );
}
export { OnboardScreen };
