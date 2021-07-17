import React from "react";
import configureStore from "./redux/store";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  const store = configureStore();
  const wrapper = shallow(<App store={store} />);

  describe("properties", () => {
    it("store", () => expect(wrapper.props().store).toEqual(store));
  });
});
