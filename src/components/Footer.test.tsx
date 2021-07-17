import React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";

describe("Footer", () => {
  const wrapper = shallow(
    <Footer>
      <p>Yeah!</p>
    </Footer>
  );

  describe("renders", () => {
    it("should load default text", () => {
      expect(wrapper.contains("Frontend-Coding-Challenge")).toBe(true);
    });
  });
});
