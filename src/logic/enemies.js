const potentialEnemyNames = {
  "Imp": "Hisssss..",
  "Hill Giant": "Fee Fi Fo Fum, I'm about to turn you into lunch.",
  "Cave Troll": "Shreik.. gulp.. gurgle ",
  "Mysterious Stranger": "Mua ha ha, It is I! A stranger who is also mysterious",
  "Garden Gnome": "You think you can just walk into my... my.. my, my gardend unanounced?!",
  "Ent": "I grow weary of your kind human.",
  "Old Man": "oooh ma back..",
  "Bart the Great": "I am Bart and I am great! <br>Prepare to meet your destiny."
}

// CHANCE PERCENTAGES OF ENEMY LEVEL RELATED TO PLAYER LEVEL UPON GENERATION
const enemyLvlChances = {
  isLower: 3,
  isSame: 75,
  isHigher: 22
}

const enemyBaseHealth = 10

export { enemyLvlChances, potentialEnemyNames, enemyBaseHealth }