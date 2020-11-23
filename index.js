// Пораждающие
// Singleton
const { Singleton } = require("./singleton");

const counter = new Singleton();
const counter2 = new Singleton();

counter.increase();
counter2.increase();

// console.log(counter.getCount() === counter2.getCount());

// Factory
const { BmwFactory } = require("./factory");

const factory = new BmwFactory();

const auto1 = factory.create("X5");
const auto2 = factory.create("X6");

//console.log(auto1, auto2);

// Abstract Factory
const { bmwProducer } = require("./abstract-factory");

const sportCar = bmwProducer("sport");
const familyCar = bmwProducer("family");

// console.log(sportCar, familyCar);

// Prototype
const { TeslaCar } = require("./prototype");
const prototype = require("./prototype");

const teslaProto = new TeslaCar("black", true);

const tesla1 = teslaProto.create();
const tesla2 = teslaProto.create();

tesla2.autopilot = false;

// console.log(tesla1, tesla2);

//Buileder
const { CarBuilder } = require("./builder");

const standartCar = new CarBuilder().addConditioner().build();
const premiumCar = new CarBuilder()
  .addAutopilot()
  .addConditioner()
  .updateEngine("v8")
  .build();

// console.log(standartCar, premiumCar);


// Структурные паттерны

// Adapter
const { OldCalc, NewCalc, NewCalcAdapter } = require("./builder");

const r1 = new OldCalc.operations(5, 5, 'add'); // todo Error
const r2 = new NewCalc.add(5, 5);
const r3 = new NewCalcAdapter.operations(5, 5);
console.log(r1, r2, r3)