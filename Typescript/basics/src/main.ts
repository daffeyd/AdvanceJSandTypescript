// // create a user name and console log it
// const username = "John Doe";
// console.log(username);

// //create a,b,c variable and cosole log a/b
// let b='6';

let x = 12;
let y = '6';
let z = 2;

console.log(x / y);

// let stringArr = ["one", "hey", "Dave"];
// let guitars = ["Strat", "Les Paul", 5150];
// let mixedData = ["EVH", 1984, true];

// stringArr[0] = "John";
// stringArr.push("hey");
// guitars[0] = 1984;
// guitars.unshift("Jim");
// guitars = stringArr;

// let test = [];
// let bands: string[] = [];
// bands.push("Van Halen");
// // Tuple
// let myTuple: [string, number, boolean] = ["Dave", 42, true];
// let mixed = ["John", 1, false];
// myTuple[1] = 42;

// // Objects
// let myObj: object;
// myObj = [];
// console.log(typeof myObj);
// myObj = bands;
// myObj = {};

// const exampleObj = {
//   prop1: "Dave",
//   prop2: true,
// };

// exampleObj.prop1 = "John";

type Guitarist = {
  name: string;
//   active?: boolean;
  active?: boolean;
  albums: (string | number)[];
};

// interface Guitarist {
//   name: string;
//   //   active?: boolean;
//   active?: boolean;
//   albums: (string | number)[];
// }

// let evh: Guitarist = {
//   name: "Eddie",
//   active: false,
//   albums: [1984, 5150, "OU812"],
// };

// let jp: Guitarist = {
//   name: "Jimmy",
//   active: true,
//   albums: ["I", "II", "IV"],
// };

// const greetGuitarist = (guitarist: Guitarist) => {
//   if (guitarist.name) {
//     return `Hello ${guitarist.name.toUpperCase()}!`;
//   }
//   return "Hello!";
// };

// // Enums
// // "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
// enum Grade {
//   U = 1,
//   D,
//   C,
//   B,
//   A,
// }
// console.log(Grade.U);

// //Type Alias
// type stringOrNumber = string | number;

// type stringOrNumberArray = (string | number)[];

// type UserId = stringOrNumber;

//literal Type
let myName: "Dave";
//my name can only be inserted by value Dave
let userName: "Dave" | "john" | "Amy";

userName = "bambang";

// // functions
// // if we return a + b which use for adding number only in Ts, we should infer the number type in the parameters
// // we also infer the return value type of a function
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const logMsg = (message: any): void => {
//   console.log(message);
// };

// logMsg("Hello!");
// logMsg(add(2, 3));

// let subtract = function (c: number, d: number): number {
//   return c - d;
// };

// type mathFunction = (a: number, b: number) => number;
// // interface mathFunction {
// //     (a: number, b: number): number
// // }

// // you can type the type of a variable so you not have to infer the variable type in  each use function
// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };

// logMsg(multiply(2, 2));

// // optional parameters
// const addAll = (a: number, b: number, c?: number): number => {
//   // for the optional parameters we should make the if conditional so the type script won't error
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// };

// // default param value
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//   return a + b + c;
// };

// logMsg(addAll(2, 3, 2));
// logMsg(addAll(2, 3));
// logMsg(sumAll(2, 3));
// logMsg(sumAll(undefined, 3));

// // Rest Parameters
// const total = (a: number, ...nums: number[]): number => {
//   return a + nums.reduce((prev, curr) => prev + curr);
// };

// logMsg(total(10, 2, 3));


// //never type  is used when we are sure that never will happen
// const createError = (errMsg: string): never => {
//   throw new Error(errMsg);
// };

// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//     if (i > 100) break;
//   }
// };

// // custom type guard
// const isNumber = (value: any): boolean => {
//   return typeof value === "number" ? true : false;
// };

// // use of the never type
// const numberOrString = (value: number | string): string => {
//   if (typeof value === "string") return "string";
//   if (isNumber(value)) return "number";
//   // we should  never get here! but in ts we should to code the return statement or else statement so the function has not error on it
//   return createError("This should never happen!");
// };

//Type assertion and casting

type One = string;
type Two = string | number;
type Three = "hello";

// to assign value to a variable it can be less specific or more specific using "as" or angle bracket
// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  // in this function a and b is a number but we can concat them as a string by using "" and follow with the + a and b
  return "" + a + b;
};

// even we know that the function  will always return a string, we still need to tell TypeScript what we expect from it.
let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

//10 as string
// avoid this if possible because it force casting(overrule)
10 as unknown as string;

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
// non null assertion is "!"
// const myImg = document.getElementById("#img")!

//This wilnot work in tsx for react
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;