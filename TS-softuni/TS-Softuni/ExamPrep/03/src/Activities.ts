import { Cloth } from "./Cloth";

export interface Activities {
  addCloth(entity: Cloth): void;
  removeCloth(color: string): boolean;
  getSmallestCloth(): Cloth;
  getCloth(color: string): Cloth;
  getClothCount(): number;
  report(): string;
}
