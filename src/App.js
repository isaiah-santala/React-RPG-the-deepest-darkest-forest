
import React, { Component } from 'react';
import { generatePlayer } from './logic/generators/generators'
import Game from './components/Game';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'GAME',
      player: {
        name: 'Bob Trufant',
        saying: 'I am Bob!',
        img: {
          name: 'male1',
          type: 'player'
        }
      }
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {

  }

  render() {
    const  { view, player } = this.state

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
