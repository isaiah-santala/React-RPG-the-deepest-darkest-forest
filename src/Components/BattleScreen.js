import React, { Component } from "react";
import characterInfo from "./CharacterInfo";
import Attacks from "./Attacks";
import Actions from "./Actions";
import Characters from "./Characters";
import GameStates from "../Game/GameStates";
import PlayerActions from "../PlayerActions";
import Message from "./Message";
import Items from "./Items";
class BattleScreen extends React.Component {
  constructor(props) {
    super(props);

    this.Bottom = this.Bottom.bind(this);
    this.game = this.game.bind(this);
    this.actionClicked = this.actionClicked.bind(this);
  }

  game() {
    return this.props.game;
  }

  canChangeAction() {
    switch (this.game().state) {
      case GameStates.IDLE:
      case GameStates.characters:
      case GameStates.ATTACK:
      case GameStates.ITEM:
        return true;
    }
    return false;
  }

  actionClicked(action) {
    if (!this.canChangeAction()) return;
    switch (action) {
      case PlayerActions.Attack:
        this.props.changeGamestate(GameStates.ATTACK);
        break;
      case PlayerActions.Items:
        this.props.changeGamestate(GameStates.ITEM);
        break;
      case PlayerActions.characters:
        this.props.changeGamestate(GameStates.characters);
        break;
      case PlayerActions.Run:
        alert("You cannot run from GHRSEA03.");
        break;
    }
  }

  Bottom(props) {
    let player = this.game().player;
    let left = <div className="left" />;
    switch (this.game().state) {
      case GameStates.characters: {
        left = <character character={player.character} />;
        break;
      }
      case GameStates.ATTACK: {
        let characters = this.game().playercharacters;
        left = (
          <Attacks
            onAttackClick={this.props.onAttackClick}
            attacks={characters.attacks}
          />
        );
        break;
      }
      case GameStates.ITEM: {
        left = <Items />;
        break;
      }
      case GameStates.PLAYER_ATT_MSG:
      case GameStates.ENEMY_ATT_MSG: {
        left = (
          <Message
            onMessageAccepted={this.props.onMessageAccepted}
            message={this.game().message}
          />
        );
        break;
      }
    }

    return (
      <div className="bottom">
        {left}
        <div className="divider" />
        <Actions onActionClick={this.actionClicked} />
      </div>
    );
  }

  render() {
    let game = this.game();
    return (
      <div className="battleScreen">
        <div className="top">
          <charactersInfo characters={game.enemycharacters} />
          <charactersInfo characters={game.playercharacters} />
        </div>
        <this.Bottom />
      </div>
    );
  }
}

export default BattleScreen;
