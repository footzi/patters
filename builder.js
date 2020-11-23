class Car {
  constructor() {
    this.engine = 'v4';
    this.autopilot = false;
    this.conditioner = false;
  }
}


class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutopilot() {
    this.car.autopilot = true;

    return this;
  }

  addConditioner() {
    this.car.conditioner = true;

    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;

    return this;
  }

  build() {
    return this.car;
  }
}

module.exports = {
  CarBuilder
}