class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  carName() {
    return `This is ${this.brand} ${this.model}, `;
  }
}

class Mitsubishi extends Car {
  constructor(brand, model, engine) {
    super(brand, model);
    this.engine = engine;
  }
  fullCarInfo() {
    return this.carName() + 'with ' + this.engine + ' engine.';
  }
}

const myCar = new Mitsubishi('mitsubishi', 'evolution', '4g63t');
console.log(myCar.fullCarInfo());
