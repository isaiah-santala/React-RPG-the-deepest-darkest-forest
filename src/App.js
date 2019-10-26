import React from 'react';
import HomeView from './components/HomeView/HomeView'
import { generateNewEnemy } from './logic/generators/generators'


const App = () => {
  console.log(generateNewEnemy(2))
  return (
    <div>
      <HomeView/>
    </div>
  )
}

export default App
