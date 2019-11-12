import React, { Component } from 'react'
import { Message } from './Message'

class Popup extends Component {
  constructor(props) {
    super(props)
    this.closePopUp = this.closePopUp.bind(this)
  }

  closePopUp() {
    const { closePopUp, cb } = this.props
    closePopUp(cb)
  }

  componentDidMount() {
    document.addEventListener(
      'keydown', 
      this.closePopUp
    )
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown', 
      this.props.closePopUp(
        this.closePopUp
      )
    )
  }

  render() {
    const { msg, type = 'MSG' } = this.props

    return (
      <div 
        className="blackout"
        onClick={this.closePopUp}
      >
  
        {type === 'MSG' && 
          <Message
            msg={msg}
          />}
  
      </div>
    )
  }
}


export default Popup