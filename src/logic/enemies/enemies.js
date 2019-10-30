const potentialEnemyDescriptions = [
  {
    name: "Imp",
    saying: "Hisssss..",
    img: {
      type: 'enemy',
      name: 'imp'
    }
  },
  { 
    name: "Hill Giant",
    saying: "Fee Fi Fo Fum, I'm about to turn you into lunch.",
    img: {
      type: 'enemy',
      name: 'giant'
    }
  },
  {
    name: "Cave Troll",
    saying: "Shreik.. gulp.. gurgle ",
    img: {
      type: 'enemy',
      name: 'caveTroll'
    }
  },
  {
    name: "Mysterious Stranger",
    saying: "Mua ha ha, It is I! The stranger who is also mysterious",
    img: {
      type: 'enemy',
      name: 'stranger'
    }
  },
  {
    name: "Garden Spirit",
    saying: "You think you can just walk into my... my.. my, my gardend unanounced?!",
    img: {
      type: 'enemy',
      name: 'garden'
    }
  },
  {
    name: "Ent",
    saying: "I grow weary of your kind human.",
    img: {
      type: 'enemy',
      name: 'ent'
    }
  },
  {
    name: "Old Man",
    saying: "oooh ma back..",
    img: {
      type: 'enemy',
      name: 'old'
    }
  },
  {
    name: "Bart the Great",
    saying: "I am Bart and I am great! <br>Prepare to meet your destiny.",
    img: {
      type: 'enemy',
      name: 'bart'
    }
  }
]

// CHANCE PERCENTAGES OF ENEMY LEVEL RELATED TO PLAYER LEVEL UPON GENERATION
const enemyLvlChances = {
  isLower: 3,
  isSame: 75,
  isHigher: 22
}

const enemyBaseHealth = 10

export { enemyLvlChances, potentialEnemyDescriptions, enemyBaseHealth }