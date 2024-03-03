"use strict";
// in class we should add constructor and member, we should enter it in the member and constructor
// but to keep things simple and short we can use  visible modifier
// (public, readonly, public readonly, private, protected)
class Coder {
    constructor(
    // difference between private and protected
    // private can only be acces in the class 
    // protedted can access in the class and the subclasses
    name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age)
// console.log(Dave.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        // to create a derived class we must put super
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
//////////////////////////////////////
class Peeps {
    static getCount() {
        // while using static the "count" variable is not refer to any instance so when called
        // we can  just use the class itself instead of an instance of that class
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        //put the plus-plus in the first so the first id would be one
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
// because you use static you can access the variable inside the class
console.log(Peeps.count);
//////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
// MyBands.data = ["Van Halen", 5150]; // must be string data
