import React, { Component } from 'react';
import PlayerActions from "../PlayerActions";

function Button(props) {
    return (
        <button onClick={props.onClick} type="button"> {props.name} </button>
    )
}

class Actions extends React.Component
{
    onActionClick(action) {
        this.props.onActionClick(action);
    }

    render() {
        return (
            <div className="actions">
                <Button onClick={this.onActionClick.bind(this, PlayerActions.Attack)} name="Attack" />
                <Button onClick={this.onActionClick.bind(this, PlayerActions.characters)} name="characters" />
                <Button onClick={this.onActionClick.bind(this, PlayerActions.Items)} name="Item" />
                <Button onClick={this.onActionClick.bind(this, PlayerActions.Run)} name="Run" />
            </div>

        )
    }
}
export default Actions;