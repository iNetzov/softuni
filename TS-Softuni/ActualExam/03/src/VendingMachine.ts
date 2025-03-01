import { Drink } from "./Drink";
import { Actions } from "./Actions";

export class VendingMachine implements Actions {
  private _buttonCapacity: number = -1;
  private drinks: Drink[] = [];
  private _getCount: number = -1;

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.drinks = [];
    this.getCount = this.drinks.length;
  }
  // Getters And Setters
  public set buttonCapacity(newBtnC: number) {
    this._buttonCapacity = newBtnC;
  }
  public get buttonCapacity(): number {
    return this._buttonCapacity;
  }
  public set getCount(newCount: number) {
    this._getCount = newCount;
  }
  public get getCount(): number {
    return this.drinks.length;
  }
  // Getters And Setters
  // Methods
  addDrink(drink: Drink): void {
    if (this.buttonCapacity > this.drinks.length) {
      this.drinks.push(drink);
    }
  }
  removeDrink(name: string): boolean {
    const index = this.drinks.findIndex((el) => el.name === name);
    if (index === -1) {
      return false;
    } else {
      this.drinks.splice(index, 1);
      return true;
    }
  }
  getLongest(): string {
    return this.drinks
      .slice()
      .sort((a, b) => b.volume - a.volume)[0]
      .toString();
  }
  getCheapest(): string {
    return this.drinks
      .slice()
      .sort((a, b) => a.price - b.price)[0]
      .toString();
  }
  buyDrink(name: string): string {
    return this.drinks.filter((el) => el.name === name)[0].toString();
  }
  report(): string {
    return `Drinks available:\n ${this.drinks.join("\n")}`;
  }
  // Methods
}
