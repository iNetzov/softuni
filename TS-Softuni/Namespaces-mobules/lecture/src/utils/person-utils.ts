import { Person } from "../modules";

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};

export const tranformPersonNameToCapitalLetters = (person: Person) => {
  return { ...person, name: capitalizeFirstLetter(person.name) };
};
