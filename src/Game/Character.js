import characters from "./characters.js";
import { dockerfy, nginxme } from "./Attacks.js";

class isaiah extends characters {
  constructor(level) {
    super("isaiah", level, [new dockerfy()]);
  }

  getMaxHp() {
    return this.level * 10;
  }
}

class matt extends characters {
  constructor(level) {
    super("matt", level, [new dockerfy(), new nginxme()]);
  }

  getMaxHp() {
    return this.level * 7;
  }
}

export { isaiah, matt };
