class Box<T> {
  private param: T;
  constructor(param: T) {
    this.param = param;
  }
  toString() {
    console.log(`${this.param} is of type ${typeof this.param}`);
  }
}

const box = new Box(["ivaylo", "hello"]).toString();
const box2 = new Box(12).toString();
const box3 = new Box(true).toString();
