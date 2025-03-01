import { Cloth } from "./Cloth";
import { Activities } from "./Activities";

export class Magazine implements Activities {
  private type: string;
  private capacity: number;
  private clothes: Cloth[];

  constructor(type: string, capacity: number) {
    this.type = type;
    this.capacity = capacity;
    this.clothes = [];
  }
  addCloth(entity: Cloth): void {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(entity);
    }
  }

  removeCloth(color: string): boolean {
    const index = this.clothes.findIndex((el) => el.getColor === color);
    if (index === -1) {
      return false;
    } else {
      this.clothes = this.clothes.splice(index, 1);
      return true;
    }
  }

  getSmallestCloth(): Cloth {
    let orderedArray = this.clothes.sort((a, b) => a.getSize - b.getSize);
    return orderedArray[0];
  }
  getClothCount(): number {
    return this.clothes.length;
  }
  getCloth(color: string): Cloth {
    return this.clothes.filter((c) => c.getColor === color)[0];
  }

  report(): string {
    let sizedClothes = this.clothes.sort((a, b) => a.getSize - b.getSize);
    return `${this.type} magazine contains:\n${sizedClothes.join("\n")}`;
  }
}
