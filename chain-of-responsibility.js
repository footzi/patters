class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Платеж ${orderPrice} списан с ${this.name}`);
    } else if (this.incomer) {
      console.log(`Нет лавэ на ${this.name}`);
      this.incomer.pay(orderPrice)
    } else {
      console.log('Нет лавэ не на одном счету');
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }

  setNext(account) {
    this.incomer = account;
  }
}

class Visa extends Account {
  constructor(balance) {
    super();
    this.name = 'Visa'
    this.balance = balance;
  }
}

class PayPal extends Account {
  constructor(balance) {
    super();
    this.name = 'PayPal'
    this.balance = balance;
  }
}

class WebMoney extends Account {
  constructor(balance) {
    super();
    this.name = 'WebMoney'
    this.balance = balance;
  }
}

module.exports = {
  Visa,
  PayPal,
  WebMoney
}