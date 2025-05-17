"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
class Drink {
    _name = "";
    _price = 0;
    _volume = 0;
    constructor(name, price, volume) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }
    // Getters setters
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
    get volume() {
        return this._volume;
    }
    set volume(newVolume) {
        this._volume = newVolume;
    }
    // Getters setters
    toString() {
        return `Name: ${this.name}, Price: \$${this.price.toFixed(1)}, Volume: ${this.volume} ml`;
    }
}
exports.Drink = Drink;
//# sourceMappingURL=Drink.js.map