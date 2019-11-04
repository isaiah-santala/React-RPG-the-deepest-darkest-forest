import React from 'react'
import { connect } from 'react-redux'
import { takeDmg } from './redux/actions'


const Redux = ({ stats, takeDmg }) => {
  console.log(stats)

  takeDmg(12)

  console.log(stats)

  return (
    <div></div>
  )
}

const matStateToProps = ({ stats }) => {
  return { stats }
}

export default connect(
  matStateToProps, 
  { takeDmg }
)(Redux)