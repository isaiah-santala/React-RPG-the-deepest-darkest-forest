import characters from "./characters.js";

class Player {
  constructor(name, characters) {
    this.name = name;
    this.characters = characters;
  }

  getName() {
    return this.name;
  }

  getcharacters(index) {
    return this.characters[index];
  }

  getcharactersCount() {
    return this.characters.length;
  }
}

export default Player;
