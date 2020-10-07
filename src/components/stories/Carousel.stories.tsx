import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import Carousel from "@components/Carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const items: string[] = ["test", "item", "next"];

storiesOf("Carousel", module)
  .addDecorator((story) => (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {story()}
    </SafeAreaView>
  ))
  .add("default", () => <Carousel items={items} />);
