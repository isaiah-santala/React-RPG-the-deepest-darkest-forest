// LOOT CLASS 

class Loot {
  constructor() {
  }

  addItem(item) {
    if (!this[item.name]) this[item.name] = item
    else this[item.name].qt = this[item.name].qt + item.qt
  }
}

export { Loot }