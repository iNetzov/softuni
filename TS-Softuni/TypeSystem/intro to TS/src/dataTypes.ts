// STRING
let str1: string = "hello";
str1 = "OK";
str1 = `OKKK`;
console.log(str1);

// NUMBER
let numberOfHouses: number = 10;
numberOfHouses = 10000010101;
numberOfHouses = 7e3;
numberOfHouses = 3.14;

// BOOLEAN
let isDog: boolean = true;
isDog = false;

// SYMBOL
let uniqueSymbol: Symbol = Symbol("myUniqueSymbol");
console.log(uniqueSymbol);

// NULL
let nulll: null = null;
console.log(nulll);

// Undefined
let alfa: undefined;
console.log(alfa);

// ARRAYS
const arrayOfNUmbers: Number[] = [1, 2, 3, 4];
console.log(arrayOfNUmbers);

type PersonObj = {
  name: string;
  age: number;
};

const ArrayofPersonObj: PersonObj[] = [
  { name: "ivailo", age: 22 },
  { name: "ivailo", age: 22 },
  { name: "ivailo", age: 22 },
];

// ENUM
enum DaysOfWeek {
  Monday, //0
  Tuesday, // 1
  Wednesday, //2
  Thursday, //3
  Friday, //4
}
console.log(DaysOfWeek);

// ANY / UNKNOWN
let a: any = 5;
a = "asdas";
a = { name: "Gosho" };
console.log(a);

let b: unknown = 5;
b = "asv";
b = { name: "Gosho" };
console.log(b);

// UNION TYPES
let test: number | number[] = 1;
test = [1, 2, 3, 4, 5];

// Intersection TYPES

type Cat = { name: string };
type Cat2 = { fullName: string };

const bigCat: Cat & Cat2 = { name: "Martin", fullName: "Maritin Todorov" };

// Literals
let statusMsg: "success" | "error";
statusMsg = "success";

// KEYOF
type Point = { x: number; y: number };
type PointKeys = keyof Point;
const point: Point = { x: 12, y: 123 };
Object.keys(point).forEach((key) => {
  console.log(key);
});
