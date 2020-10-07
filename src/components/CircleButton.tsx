import React, { FunctionComponent, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Animated, { Easing, timing } from "react-native-reanimated";
import { Pressable } from "react-native";

interface CircleButtonProps {
  color?: string;
  mode: "next" | "complete";
  onPress: () => void;
}

const CircleButton: FunctionComponent<CircleButtonProps> = ({ onPress }) => {
  const [scale] = useState(new Animated.Value(1));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        timing(scale, {
          duration: 400,
          toValue: 1.4,
          easing: Easing.elastic(2),
        }).start();
      }}
      onPressOut={() => {
        timing(scale, {
          duration: 400,
          toValue: 1,
          easing: Easing.elastic(2),
        }).start();
      }}
      style={{
        height: 64,
        width: 64,
        borderRadius: 32,
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "#a2acff",
          justifyContent: "center",
          alignItems: "center",
          height: 64,
          width: 64,
          borderRadius: 32,
          transform: [{ scale }],
        }}
      >
        <Ionicons name="ios-arrow-forward" size={32} color={"#fff"} />
      </Animated.View>
    </Pressable>
  );
};

export default CircleButton;
export { CircleButton };
