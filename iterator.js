class IteratorArray {
  constructor(el) {
    this.elements = el;
    this.index = 0;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

class IteratorObjects {
  constructor(el) {
    this.elements = el;
    this.keys = Object.keys(el);
    this.index = 0;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

module.exports = {
  IteratorArray,
  IteratorObjects
}