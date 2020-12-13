class Equipment {
  getPrice() {
    return this.price || 0;
  }

  setPrice(price) {
    this.price = price;
  }

  getName() {
    return this.name || "";
  }

  setName(name) {
    this.name = name;
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName("Body");
    this.setPrice(5000);
  }
}

class Wheels extends Equipment {
  constructor() {
    super();
    this.setName("Wheels");
    this.setPrice(1000);
  }
}

// Сам компоновщик
class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments
      .map((item) => item.getPrice())
      .reduce((a, b) => a + b, 0);
  }
}

class Lada extends Composite {
  constructor() {
    super();
    this.setName("Lada");
  }
}

module.exports = {
  Lada,
  Body,
  Wheels,
};
