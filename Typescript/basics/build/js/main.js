"use strict";
// // create a user name and console log it
// const username = "John Doe";
// console.log(username);
// to assign value to a variable it can be less specific or more specific using "as" or angle bracket
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    // in this function a and b is a number but we can concat them as a string by using "" and follow with the + a and b
    return "" + a + b;
};
// even we know that the function  will always return a string, we still need to tell TypeScript what we expect from it.
let myVal = addOrConcat(2, 2, "concat");
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
//10 as string
// avoid this if possible because it force casting(overrule)
10;
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
// non null assertion is "!"
// const myImg = document.getElementById("#img")!
//This wilnot work in tsx for react
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
