
class Test {
  constructor() {
    this.number = 1;
  }

  add1() {
    this.number += 1;
  }

  add(value) {
    this.number += value;
  }

  getNumber() {
    return this.number;
  }
}

export default new Test();