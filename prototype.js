class TeslaCar {
  constructor(color, autopilot) {
    this.color = color;
    this.autopilot = autopilot;
  }

  create() {
    return new TeslaCar(this.color, this.autopilot);
  }
}

module.exports = {
  TeslaCar,
};
