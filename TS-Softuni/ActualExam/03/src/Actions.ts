import { Drink } from "./Drink";

export interface Actions {
  addDrink(drink: Drink): void;
  removeDrink(name: string): boolean;
  getLongest(): string;
  getCheapest(): string;
  buyDrink(name: string): string;
  report(): string;
}
