const car = {
  wheels: 4,
  engine() {
    console.log('wroom');
  },
};

const evo = {
  awd: true,
};

Object.setPrototypeOf(evo, car);

console.log(evo.wheels);
console.log(evo.awd);
evo.engine();
