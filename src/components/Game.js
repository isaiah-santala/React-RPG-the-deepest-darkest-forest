import React, { Component } from 'react'
import HomeView from './HomeView'
import CombatView from './CombatView'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'COMBAT'
    }
  }

  updateView(view) {
    this.setState({ view })
  }

  render(props) {
    const { view } = this.state
    const { player } = this.props

    return (
      <div>
        {view === 'HOME' &&
          <HomeView
            player={player}
            updateView={this.updateView}
          />}
        {view === 'COMBAT' &&
          <CombatView
            player={player}
            updateView={this.updateView}
          />}
      </div>
    )
  }
}

export default Game