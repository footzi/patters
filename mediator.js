// Медиатор
class Airoport {
  constructor() {
    this.runwayPlane = "";
  }

  checkRunway() {
    return !!this.runwayPlane;
  }

  boarding(plane) {
    this.runwayPlane = plane.getName();

    setTimeout(() => {
      this.runwayPlane = "";
    }, 1000);
  }

  requestBoarding(plane) {
    if (!this.checkRunway()) {
      this.boarding(plane);
      console.log("посадка разрешена");
      return true;
    } else {
      console.log("посадка запрещена");
      return false;
    }
  }
}

class Plane {
  constructor(name, airoport) {
    this.name = name;
    this.airoport = airoport;
  }

  getName() {
    return this.name;
  }

  requestBoarding() {
    const result = this.airoport.requestBoarding(this);

    if (!result) {
      setTimeout(() => {
        this.requestBoarding();
      }, 1100);
    }
  }
}

module.exports = {
  Plane,
  Airoport,
};
