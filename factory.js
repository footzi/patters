class Bmw {
  constructor(engine, speed, color) {
    this.engine = engine;
    this.speed = speed;
    this.color = color;
  }
}

class BmwFactory {
  create(model) {
    if (model === "X5") {
      return new Bmw("6", "250", "red");
    }

    if (model === "X6") {
      return new Bmw("8", "300", "blue");
    }
  }
}

module.exports = {
  BmwFactory,
};
