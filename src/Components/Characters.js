import React, { Component } from "react";

function characters(props) {
  return (
    <button type="button">
      {" "}
      {props.name} [:L{props.level}] - {props.hitPoints}% HP{" "}
    </button>
  );
}

class character extends React.Component {
  render() {
    let character = [];

    this.props.character.forEach(p => {
      let hp = (p.getHp() / p.getMaxHp()) * 100;
      character.push(
        <characters name={p.name} hitPoints={hp} level={p.level} />
      );
    });

    return <div className="character left">{character}</div>;
  }
}
export default character;
