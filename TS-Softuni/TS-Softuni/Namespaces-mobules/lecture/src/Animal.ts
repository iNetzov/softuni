namespace AnimalGroup {
  export class Animal {
    furColor: string;
    numberOfLegs: number;
    type: string;

    constructor(furcolor: string, numberOfLegs: number, type: string) {
      this.furColor = furcolor;
      this.numberOfLegs = numberOfLegs;
      this.type = type;
    }
    getDetails() {
      return `This animal is of type ${this.type} and it has fur color of ${this.furColor}`;
    }
  }
}
