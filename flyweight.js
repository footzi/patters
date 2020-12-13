// содержит кэш запросов и управляет ими
class Flyweight {
  constructor() {
    this.cache = [];
  }

  set(name, variable, data) {
    console.log(this.cache);
    if (!this.has(name, variable)) {
      this.cache.push({
        name,
        variable,
        data,
      });
    }
  }

  has(name, variable) {
    return !!this.get(name, variable);
  }

  get(name, variable) {
    const el = this.cache.find(
      (item) =>
        item.name === name &&
        JSON.stringify(item.variable) === JSON.stringify(variable)
    );

    if (el) {
      return el.data;
    } else {
      return null;
    }
  }
}

class Request {
  get(name, variable) {
    console.count("get request");
    return `You Request - ${name}, Response - ${JSON.stringify(variable)}`;
  }
}

class RequestFactory {
  constructor() {
    this.request = new Request();
    this.flyweight = new Flyweight();
  }

  call(name, variable) {
    const cacheData = this.flyweight.get(name, variable);

    if (cacheData) {
      return cacheData
    } else {
      const data = this.request.get(name, variable);
      this.flyweight.set(name, variable, data);

      return data;
    }
  }
}


module.exports = {
  RequestFactory,
};