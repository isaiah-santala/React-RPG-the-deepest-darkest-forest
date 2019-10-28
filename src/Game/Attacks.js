import Attack from "./Attack.js";

let id = (function() {
  let lastID = 0;
  return function() {
    return lastID++;
  };
})();

class dockerfy extends Attack {
  constructor(props) {
    super(props);
    this.id = id();
    this.name = "dockerfy";
    this.description = "dockerfys another characters";
  }

  affect(characters, othercharacters) {
    let dmg = characters.level * 2;

    othercharacters.damage(dmg);
  }
}

class nginxme extends Attack {
  constructor(props) {
    super(props);
    this.id = id();
    this.name = "nginxme";
    this.description = "Can cause other characters to lose turn";
  }

  affect(characters, othercharacters) {
    let dmg = characters.level * 1;

    othercharacters.damage(dmg);
  }
}

export { dockerfy, nginxme };
