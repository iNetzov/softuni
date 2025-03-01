class Car {
  private _brand: string = "";
  private _model: string = "";
  private _hp: number = 0;

  //   Constructor
  constructor(_brand: string, _model: string, _hp: number) {
    this.brand = _brand;
    this.model = _model;
    this.hp = _hp;
  }
  //   Getters/Setters
  public get brand() {
    return this._brand;
  }
  public set brand(newBrand: string) {
    this._brand = newBrand;
  }

  public get model() {
    return this._model;
  }
  public set model(newModel: string) {
    this._model = newModel;
  }
  public get hp() {
    return this._hp;
  }
  public set hp(newHp: number) {
    this._hp = newHp;
  }

  public getDetails(): void {
    console.log(`The car is ${this.brand} ${this.model} - ${this.hp} HP.`);
  }
}

const myCar = new Car("opel", "cadet", 83);
console.log(`Mycar getter brand : ${myCar.brand}`);
myCar.brand = "Audi";
console.log(`Mycar getter brand : ${myCar.brand}`);
console.log();
console.log(`Mycar getter model : ${myCar.model}`);
myCar.model = "A4";
console.log(`Mycar getter model : ${myCar.model}`);
console.log();
console.log(`Mycar getter hp : ${myCar.hp}`);
myCar.hp = 550;
console.log(`Mycar getter hp : ${myCar.hp}`);

myCar.getDetails();
