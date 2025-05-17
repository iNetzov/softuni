class Courier implements FoodAndBeverages.Delivery {
  protected placesToVisit: { customerName: string; visited: boolean }[];

  constructor(placesToVisit: { customerName: string; visited: boolean }[]) {
    this.placesToVisit = placesToVisit;
  }

  newCustomer(customerName: string, visited: boolean = false): void {
    if (this.placesToVisit.find((e) => e.customerName === customerName)) {
      console.log(`${customerName} is already a customer of yours!`);
    } else {
      this.placesToVisit.push({ customerName: customerName, visited: visited });
      console.log(`${customerName} just became your client.`);
    }
  }

  visitCustomer(customerName: string): void {
    if (this.placesToVisit.find((e) => e.customerName === customerName)) {
      this.placesToVisit.map((e) => {
        if (e.customerName === customerName) {
          e.visited = true;
        }
      });
    } else {
      console.log(`${customerName} is not your customer`);
    }
  }

  showCustomers(): void {
    for (const el of this.placesToVisit) {
      console.log(`${el.customerName} -> ${el.visited}`);
    }
  }
}
const a = new Courier([
  { customerName: "Martin", visited: false },
  { customerName: "Martin1", visited: true },
  { customerName: "Martin2", visited: false },
]);
a.showCustomers();
a.newCustomer("Martin", true);
a.newCustomer("Ivailo", false);

a.visitCustomer("Marko");
a.visitCustomer("Ivailo");
a.showCustomers();

console.log();
console.log();
console.log();
let cc = new Courier([{ customerName: "DHL", visited: false }]);
cc.newCustomer("Speedy");
cc.newCustomer("MTM");
cc.newCustomer("TipTop");
cc.visitCustomer("DHL");
cc.visitCustomer("MTM");
cc.visitCustomer("MTM");

cc.showCustomers();
