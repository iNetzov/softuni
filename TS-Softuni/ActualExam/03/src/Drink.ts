export class Drink {
  private _name: string = "";
  private _price: number = 0;
  private _volume: number = 0;

  constructor(name: string, price: number, volume: number) {
    this.name = name;
    this.price = price;
    this.volume = volume;
  }
  // Getters setters

  public get name(): string {
    return this._name;
  }
  public set name(newName: string) {
    this._name = newName;
  }
  public get price(): number {
    return this._price;
  }
  public set price(newPrice: number) {
    this._price = newPrice;
  }
  public get volume(): number {
    return this._volume;
  }
  public set volume(newVolume: number) {
    this._volume = newVolume;
  }
  // Getters setters
  toString() {
    return `Name: ${this.name}, Price: \$${this.price.toFixed(1)}, Volume: ${
      this.volume
    } ml`;
  }
}
