export function maxHit() {
    return (this.stats.lvl * 2) + 10
}

export function   baseHit() {
    return this.maxHit() / 2
}

export function   maxHp() {
    return (Math.ceil(this.stats.lvl / 2) * 10) + this.stats.lvl - 1
}

export function rollAttack() {
    const roll = rollDice(100)
    if (roll <= 10) return 0
    if (roll > 10 && roll <= 30) return Math.floor(this.baseHit() - (this.baseHit() / 2) + rollDice(this.baseHit() / 4))
    if (roll > 30 && roll <= 70) return Math.floor(this.baseHit() + (rollDice(this.baseHit() / 4)))
    if (roll > 70 && roll <= 90) return Math.floor(this.baseHit() + (this.baseHit() / 2) + (rollDice(this.baseHit() / 4)))
    if (roll > 90) return Math.floor(this.maxHit() + (rollDice(this.baseHit() / 4)))
}