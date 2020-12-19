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
const { OldCalc, NewCalc, NewCalcAdapter } = require("./adapter");

const r1 = new OldCalc().operations(5, 5, "add"); // todo Error
const r2 = new NewCalc().add(5, 5);
const r3 = new NewCalcAdapter().operations(5, 5, "add");
// console.log(r1, r2, r3)

// Bridge
const { Bmw, Audi, BlackColor, RedColor } = require("./bridge");

const blackBmw = new Bmw(new BlackColor());
const redAudi = new Audi(new RedColor());

// console.log(blackBmw.paint(), redAudi.paint());

// Decorator
const { Server, AwsServer } = require("./decorator");
const aws = new AwsServer(new Server());

// console.log(aws.getPrice());
// console.log(aws.getPort());

// Facade
const { BuyCar } = require("./facade");
const myNewCar = new BuyCar("vw");

// console.log(myNewCar.getPrice());

const { PermissionServer, Authorization } = require("./proxy");
const auth = new PermissionServer(new Authorization());

// console.log(auth.login('Peter'));
// console.log(auth.login('Vlad'));

// Composite
const { Lada, Body, Wheels } = require("./composite");
const myCar = new Lada();

myCar.add(new Body());
myCar.add(new Wheels());

// console.log(`My car: ${myCar.getName()}, price: ${myCar.getPrice()}`);

// Flyweight
const { RequestFactory } = require("./flyweight");
const requestFactory = new RequestFactory();

// console.log(requestFactory.call("getProfile", { userId: 1 }));
// console.log(requestFactory.call("getProfile", { userId: 1 }));
// console.log(requestFactory.call("getProfile", { userId: 2 }));

// Meдиатор
const { Airoport, Plane } = require("./mediator");
const heathrow = new Airoport();
const airbus330 = new Plane("a330", heathrow);
const boing777 = new Plane("b777", heathrow);

// boing777.requestBoarding();
// airbus330.requestBoarding();

// Iterator
const { IteratorArray, IteratorObjects } = require("./iterator");

const arrayCollection = new IteratorArray(["1", "2", "3"]);

// while (arrayCollection.hasNext()) {
//   console.log(arrayCollection.next());
// }

const objectCollection = new IteratorObjects({
  audi: { id: "1", name: "Vlad" },
  vw: { id: "2", name: "Test" },
});

// while (objectCollection.hasNext()) {
//   console.log(objectCollection.next());
// }


// Chain of Responsibility
const { Visa, PayPal, WebMoney } = require("./chain-of-responsibility");

const visa = new Visa(100);
const paypal = new PayPal(200);
const webmoney = new WebMoney(500);

// Устанавливаем зависимости
visa.setNext(paypal);
paypal.setNext(webmoney);

// visa.pay(400)
