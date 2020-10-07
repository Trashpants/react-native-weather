import React from "react";
import { render, cleanup, act } from "@testing-library/react-native";

import App from "../App";

afterEach(cleanup);

describe("App Root", () => {
  test("should match snapshot", async () => {
    const res = render(<App />).toJSON();
    await act(async () => {
      expect(res).toMatchSnapshot();
    });
  });
});
