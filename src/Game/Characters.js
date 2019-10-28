class characters {
  constructor(name, level, attacks) {
    this.name = name;
    this.level = level;
    this.attacks = attacks;

    this.hp = this.getMaxHp();
  }

  getName() {
    return this.name;
  }
  getLevel() {
    return this.level;
  }
  getMaxHp() {
    return 1;
  }
  getHp() {
    return this.hp;
  }

  damage(removeAmount) {
    this.hp -= removeAmount;
    if (this.hp < 0) this.hp = 0;
  }

  isDead() {
    return this.hp === 0;
  }

  heal(amount) {
    this.hp += amount;
    if (this.hp >= this.maxHp) this.hp = this.maxHp;
  }

  healFull() {
    this.hp = this.maxHp;
  }

  getAttack(index) {
    return this.attacks[index];
  }
}

export default characters;
