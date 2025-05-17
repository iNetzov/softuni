"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    _buttonCapacity = -1;
    drinks = [];
    _getCount = -1;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
        this.getCount = this.drinks.length;
    }
    // Getters And Setters
    set buttonCapacity(newBtnC) {
        this._buttonCapacity = newBtnC;
    }
    get buttonCapacity() {
        return this._buttonCapacity;
    }
    set getCount(newCount) {
        this._getCount = newCount;
    }
    get getCount() {
        return this.drinks.length;
    }
    // Getters And Setters
    // Methods
    addDrink(drink) {
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((el) => el.name === name);
        if (index === -1) {
            return false;
        }
        else {
            this.drinks.splice(index, 1);
            return true;
        }
    }
    getLongest() {
        return this.drinks
            .slice()
            .sort((a, b) => b.volume - a.volume)[0]
            .toString();
    }
    getCheapest() {
        return this.drinks
            .slice()
            .sort((a, b) => a.price - b.price)[0]
            .toString();
    }
    buyDrink(name) {
        return this.drinks.filter((el) => el.name === name)[0].toString();
    }
    report() {
        return `Drinks available:\n ${this.drinks.join("\n")}`;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map