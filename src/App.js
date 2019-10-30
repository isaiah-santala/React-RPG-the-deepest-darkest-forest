
import React, { Component } from 'react';
import HomeView from './components/HomeView/HomeView'
import { generatePlayer, generateNewEnemy } from './logic/generators/generators'
import CombatView from './components/CombatView/CombatView';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: generatePlayer('Bob', 'I am Bob'),
      enemy: generateNewEnemy(0),
      view: 'COMBAT'
    }
  }

  generatePlayer(name, saying) {
    this.setState({
      player: generatePlayer(name, saying)
    })
  }

  generateNewEnemy(playerLvl) {
    this.setState({
      enemy: generateNewEnemy(playerLvl)
    })
  }

  updateView(view) {
    this.setState({ view })
  }

  render() {
    const  { view, player, enemy } = this.state

    return (
      <div>
        {view === 'LOGIN' && 
          <Login
        />}
        {view === 'HOME' && 
          <HomeView 
            player={player}
        />}
        {view === 'COMBAT' && 
          <CombatView
            player={player}
            enemy={enemy}
        />}
      </div>
    )
  }
}

export default App
