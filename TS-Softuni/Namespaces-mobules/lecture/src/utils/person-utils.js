"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tranformPersonNameToCapitalLetters = void 0;
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};
const tranformPersonNameToCapitalLetters = (person) => {
    return { ...person, name: capitalizeFirstLetter(person.name) };
};
exports.tranformPersonNameToCapitalLetters = tranformPersonNameToCapitalLetters;
