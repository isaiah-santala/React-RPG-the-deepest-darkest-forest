
import React, { Component } from 'react';
import Game from './components/Game';
import { connect } from "react-redux";
import { setPlayer } from './redux/actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'GAME',
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    this.handleLogin()
  }

  handleLogin() {
    this.props.setPlayer({
      name: 'Bob Trufant',
      saying: 'I am Bob!',
      img: {
        name: 'male1',
        type: 'player'
      }
    })
  }

  render() {
    const  { view } = this.state

    return (
      <div>
        {view === 'LOGIN' &&
          <Login
            updateView={this.updateView}
          />}
        {view === 'GAME' && 
          <Game/>}
      </div>
    )
  }
}

export default connect(
  null,
  { setPlayer }
)(App);