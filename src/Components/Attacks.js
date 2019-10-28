import React, { Component } from "react";

function Button(props) {
  return (
    <button onClick={props.onClick} type="button">
      {" "}
      {props.name}{" "}
    </button>
  );
}

class Attacks extends React.Component {
  constructor(props) {
    super(props);
  }

  onAttackClick(attack) {
    this.props.onAttackClick(attack);
  }

  render() {
    let attacks = this.props.attacks.map(attack => (
      <Button
        onClick={this.onAttackClick.bind(this, attack)}
        name={attack.getName()}
      />
    ));

    return <div className="attacks left">{attacks}</div>;
  }
}

export default Attacks;
