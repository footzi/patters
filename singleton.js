class Singleton {
  instance = null;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.count = 0;
    Singleton.instance = this;
    return this;
  }

  increase() {
    return this.count++;
  }

  getCount() {
    return this.count;
  }
}

module.exports = {
  Singleton,
};
