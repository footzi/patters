class PaintCar {
  cost = 1000;
  getCost() {
    return this.cost;
  }
}

class SetEngine {
  cost = 2000;
  getCost() {
    return this.cost;
  }
}

const priceRate = {
  vw: 1,
  audi: 2,
  bmw: 3,
};

class BuyCar {
  constructor(car) {
    this.car = car;
  }

  // тут закрыта сложная логика
  getPrice() {
    const paintCost = new PaintCar().getCost();
    const setIngineCost = new SetEngine().getCost();
    const result = (paintCost + setIngineCost) * priceRate[this.car];
    return `${this.car} final cost: ${result} $`;
  }
}

module.exports = {
  BuyCar,
};
