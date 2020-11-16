const bmwProducer = (type) => type === 'sport' ? sportCarFactory() : familyCarFactory();

const sportCarFactory = () => new A1;
const familyCarFactory = () => new Z4;

class A1 {
    constructor() {
        this.engine = '2'
        this.speed = '150'
        this.color = 'grey'
    }
}

class Z4 {
    constructor() {
        this.engine = '6'
        this.speed = '300'
        this.color = 'red'
    }
}

module.exports = {
    bmwProducer
}