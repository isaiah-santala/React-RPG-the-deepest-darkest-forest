
import React, { Component } from 'react';
import HomeView from './components/HomeView/HomeView'
import { generatePlayer } from './logic/generators/generators'
import CombatView from './components/CombatView/CombatView';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: generatePlayer('Bob', 'I am Bob'),
      view: 'COMBAT'
    }
  }

  generatePlayer(name, saying) {
    this.setState({
      player: generatePlayer(name, saying)
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
            updateView={this.updateView}
        />}
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

export default App
