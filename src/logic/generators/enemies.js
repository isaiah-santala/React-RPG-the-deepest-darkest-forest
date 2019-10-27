const potentialEnemyDescriptions = [
  {
    name: "Imp",
    saying: "Hisssss.."
  },
  { 
    name: "Hill Giant",
    saying: "Fee Fi Fo Fum, I'm about to turn you into lunch."
  },
  {
    name: "Cave Troll",
    saying: "Shreik.. gulp.. gurgle "
  },
  {
    name: "Mysterious Stranger",
    saying: "Mua ha ha, It is I! A stranger who is also mysterious"
  },
  {
    name: "Garden Gnome",
    saying: "You think you can just walk into my... my.. my, my gardend unanounced?!"
  },
  {
    name: "Ent",
    saying: "I grow weary of your kind human."
  },
  {
    name: "Old Man",
    saying: "oooh ma back.."
  },
  {
    name: "Bart the Great",
    saying: "I am Bart and I am great! <br>Prepare to meet your destiny."
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