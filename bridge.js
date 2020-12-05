class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class RedColor extends Color {
  constructor() {
    super('red');
  }
}

class BlackColor extends Color {
  constructor() {
    super('black');
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: BMW, Color: ${this.color.get()} `
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()} `
  }
}

module.exports = {
  Bmw,
  Audi,
  BlackColor,
  RedColor,
}