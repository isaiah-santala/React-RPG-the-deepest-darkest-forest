import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Actions from "./Actions";
import Adapter from "enzyme-adapter-react-16";
import PlayerActions from "../PlayerActions";

configure({ adapter: new Adapter() });

describe("Actions component", function() {
  let component = null;
  let onClick = () => {};

  beforeEach(function() {
    component = shallow(
      <Actions
        onActionClick={action => {
          onClick(action);
        }}
      />
    );
  });

  it("Has 4 buttons", function() {
    expect(component.find("Button").length).toBe(4);
  });

  it("Every Button has proper onClick", function() {
    let executed = {};
    onClick = action => {
      executed[action] = true;
    };

    let buttons = component.find("Button");
    buttons.forEach(button => {
      button.props().onClick();
    });

    for (let action in PlayerActions) {
      let value = PlayerActions[action];
      expect(executed[value]).toBe(true);
    }
  });
});
