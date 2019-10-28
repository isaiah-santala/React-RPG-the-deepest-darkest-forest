import React, { Component } from "react";

function Button(props) {
  return <button type="button"> {props.name} </button>;
}

class Items extends React.Component {
  render() {
    return (
      <div className="items left">
        <Button name="Item1" />
        <Button name="Item2" />
      </div>
    );
  }
}

export default Items;
