import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";

import "./rn-addons";

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require("@components/stories/Carousel.stories");
  require("@components/stories/CircleButton.stories");
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  host: "127.0.0.1",
  port: 7007,
});

export default StorybookUIRoot;
