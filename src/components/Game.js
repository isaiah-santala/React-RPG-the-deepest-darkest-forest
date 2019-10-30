import React, { Component } from 'react'
import Popup from './modules/Popup'
import HomeView from './HomeView'
import CombatView from './CombatView'
import { generatePlayer } from '../logic/generators/generators'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: generatePlayer(),
      view: 'COMBAT',
      popup: false,
      msg: null
    }
    this.attack = this.attack.bind(this)
    this.handleAction = this.handleAction.bind(this)
    this.updateView = this.updateView.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
  }

  componentDidMount() {
    this.generatePlayer(this.props.player)
  }

  generatePlayer(player) {
    this.setState({
      player: generatePlayer(player)
    })
  }

  updateView(view) {
    this.setState({ view })
  }

  handleAction(type, action) {
    switch(type) {
      case 'ATTACK' :
        return this.attack()
      case 'DESCRIBE_ITEM' :
        return this.togglePopup(action.msg)
    }
  }

  attack() {
    this.togglePopup('you attack your foe!')
  }

  togglePopup(msg = null) {
    const popup = !this.state.popup
    this.setState({ popup, msg })
  }

  render(props) {
    const { view, player, popup, msg } = this.state

    return (
      <div>
        {view === 'HOME' &&
          <HomeView
            player={player}
            updateView={this.updateView}
            handleAction={this.handleAction}
          />}
        {view === 'COMBAT' &&
          <CombatView
            player={player}
            updateView={this.updateView}
            handleAction={this.handleAction}
          />}
        {popup &&
          <Popup
            msg={msg}
            togglePopup={this.togglePopup}
          />}
      </div>
    )
  }
}

export default Game