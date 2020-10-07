import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import CircleButton from "@components/CircleButton";
import { SafeAreaView } from "react-native-safe-area-context";

export const actions = {
  onPress: action("onPress"),
};
storiesOf("CircleButton", module)
  .addDecorator((story) => (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {story()}
    </SafeAreaView>
  ))
  .add("default", () => <CircleButton mode="next" {...actions} />);
