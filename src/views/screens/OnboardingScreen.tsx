import React from "react";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useTheme } from "@react-navigation/native";
import { OnboardStackParams } from "@navigators/OnboardNavigator";
import { Carousel, CircleButton } from "@components/index";

interface OnboardScreenProps {
  navigation: StackNavigationProp<OnboardStackParams, "Onboard">;
  route: RouteProp<OnboardStackParams, "Onboard">;
}

export default function OnboardScreen({}: OnboardScreenProps) {
  const theme = useTheme();
  const StyledView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  const Header = styled.Text`
    color: ${theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    text-transform: capitalize;
    padding-horizontal: 32px;
    text-align: center;
    line-height: 32px;
  `;

  const Message = styled.Text`
    color: #aaa;
    padding-horizontal: 32px;
    padding-vertical: 12px;
    font-size: 16px;
    text-align: center;
  `;

  return (
    <>
      <StyledView>
        <Carousel items={[]} />
        <Header>Everything about the weather at a glance!</Header>
        <Message>
          WeatherMan will accurately display the weather in no time at all
        </Message>
        <CircleButton
          mode="next"
          onPress={() => {
            console.log("next");
          }}
        />
      </StyledView>
    </>
  );
}
export { OnboardScreen };
