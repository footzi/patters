// Пораждающий
const { Singleton } = require('./singleton');

const counter = new Singleton();
const counter2 = new Singleton();

counter.increase();
counter2.increase();

console.log(counter.getCount() === counter2.getCount());


////////////////////////
const { BmwFactory } = require('./factory');

const factory = new BmwFactory()

const auto1 = factory.create('X5');
const auto2 = factory.create('X6');

console.log(auto1, auto2);



//////////
const { bmwProducer } = require('./abstract-factory');

const sportCar = bmwProducer('sport');
const familyCar = bmwProducer('family');

console.log(sportCar, familyCar);




//////////////////////////
const { TeslaCar } = require('./prototype');

const teslaProto = new TeslaCar('black', true);

const tesla1 = teslaProto.create();
const tesla2 = teslaProto.create();

tesla2.autopilot = false;

console.log(tesla1, tesla2);