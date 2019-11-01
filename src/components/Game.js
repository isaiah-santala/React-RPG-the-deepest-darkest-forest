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
      msg: null,
      cb: null
    }
    this.attack = this.attack.bind(this)
    this.describeItem = this.describeItem.bind(this)
    this.updateView = this.updateView.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
    this.updatePlayer = this.updatePlayer.bind(this)
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

  describeItem(msg) {
    this.togglePopup(msg)
  }

  attack() {
    this.togglePopup('you attack your foe!')
  }

  togglePopup(msg = null, cb = null) {
    const popup = !this.state.popup
    this.setState({ msg, popup, cb })
  }

  updatePlayer(player, cb = null) {
    this.setState({ 
      player 
    }, () => {
      if (cb) cb()
    })
  }

  render(props) {
    const { view, player, popup, msg, cb } = this.state

    return (
      <div>
        {view === 'HOME' &&
          <HomeView
            player={player}
            updateView={this.updateView}
            describeItem={this.describeItem}
          />}
        {view === 'COMBAT' &&
          <CombatView
            popup={popup}
            player={player}
            updateView={this.updateView}
            describeItem={this.describeItem}
            togglePopup={this.togglePopup}
            updatePlayer={this.updatePlayer}
          />}
        {popup &&
          <Popup
            msg={msg}
            togglePopup={this.togglePopup}
            cb={cb}
          />}
      </div>
    )
  }
}

export default Game