import React from "react";
import { render, cleanup } from "@testing-library/react-native";

import App from "../App";

afterEach(cleanup);

describe("App Root", () => {
  describe("App Basic", () => {
    it("should match snapshot", () => {
      const res = render(<App />).toJSON();
      expect(res).toMatchSnapshot();
    });
  });
});
