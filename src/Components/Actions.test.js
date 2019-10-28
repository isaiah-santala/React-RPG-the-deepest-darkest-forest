import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from "enzyme";
import Actions from "./Actions";
import Adapter from 'enzyme-adapter-react-16';
import PlayerActions from "../PlayerActions"

configure({ adapter: new Adapter() });

describe("Actions component", function() {
    var component = null;
    var onClick = () => {};

    beforeEach(function() {
        component = shallow(<Actions onActionClick={(action) => {onClick(action);}} />)
    })

    it("Has 4 buttons", function() {
        expect(
            component.find("Button").length
        ).toBe(4);
    })

    it("Every Button has proper onClick", function() {
        var executed = {};
        onClick = (action) => {
            executed[action] = true;
        }

        var buttons = component.find("Button");
        buttons.forEach(button => {
            button.props().onClick();
        });

        for(var action in PlayerActions)
        {
            var value = PlayerActions[action];
            expect(
                executed[value]
            ).toBe(true);
        }
    });



})