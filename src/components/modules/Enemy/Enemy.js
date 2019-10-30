import React from 'react'
import { generateNewEnemy } from '../../../logic/generators/generators'
import Info from '../Character/Info'

const Enemy = ({ enemy }) => {
  enemy = generateNewEnemy(1)
  console.log(enemy)

  return (
    <div className="character-box">
      <Info char={enemy} />
    </div>
  )
}

export default Enemy