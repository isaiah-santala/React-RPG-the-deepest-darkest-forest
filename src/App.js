
import React, { Component } from 'react';
import { generatePlayer } from './logic/generators/generators'
import Game from './components/Game';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: generatePlayer('Bob', 'I am Bob'),
      view: 'GAME'
    }
  }

  generatePlayer(name, saying) {
    this.setState({
      player: generatePlayer(name, saying)
    })
  }

  render() {
    const  { view, player, enemy } = this.state

    return (
      <div>
        {view === 'LOGIN' &&
          <Login
            updateView={this.updateView}
          />}
        {view === 'GAME' && 
          <Game 
            player={player} 
          />}
      </div>
    )
  }
}

export default App
