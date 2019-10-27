import React from 'react';
import HomeView from './components/HomeView/HomeView'
import { generatePlayer, generateNewEnemy } from './logic/generators/generators'

const App = () => {
  const player = generatePlayer('Bob')
  const enemy = generateNewEnemy(2)
  console.log(player, enemy)
  return (
    <div>
      <HomeView/>
    </div>
  )
}

export default App
