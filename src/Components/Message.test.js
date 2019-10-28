import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Message from "./Message";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Message component", function() {
  let onClick = () => {};
  let message = null;
  let instance = () => message().instance();
  const text = "dupa";

  beforeEach(function() {
    message = shallow(<Message message={text} onClick={self.onClick} />);
  });

  it("renders as div", function() {
    expect(message.is("div")).toBe(true);
  });

  it("Has correct message", function() {
    expect(message.text()).toBe(text);
  });

  if (
    ("Handles onClick",
    function() {
      let clicked = false;
      onClick = () => {
        clicked = true;
      };

      message.simulate("click");

      expect(clicked).toBe(true);
    })
  );
});
