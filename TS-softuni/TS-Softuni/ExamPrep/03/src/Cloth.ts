export class Cloth {
  private color: string;
  private size: number;
  private type: string;

  constructor(color: string, size: number, type: string) {
    this.color = color;
    this.size = size;
    this.type = type;
  }
  toString(): string {
    return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
  }
  public get getColor(): string {
    return this.color;
  }
  public get getSize(): number {
    return this.size;
  }
}
