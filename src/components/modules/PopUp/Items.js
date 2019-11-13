import React from 'react'
import { connect } from 'react-redux'

const Items = () => (
  <div className="popup">

    <div className="popup-msg">
      <p>{msg}</p>
      <button>continue</button>
    </div>

  </div>
)

// const mapStateToProps = ({
//   playerStats,
//   playerLoot,
//   playerDesc,
//   enemyStats,
//   enemyLoot,
//   enemyDesc
// }) => ({
//   playerStats,
//   playerLoot,
//   playerDesc,
//   enemyStats,
//   enemyLoot,
//   enemyDesc
// })

export default connect(
  mapStateToProps
)(Items)