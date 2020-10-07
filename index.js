console.log("Hello WorldQ!");
class vehicle {
    constructor(color, pass) {
        this.color = color;
        this.pass = pass;
    }
}
class car extends vehicle {
    constructor(wheel, color, pass) {
        super(color, pass);
        this.wheel = wheel;
    }
}
class owner extends car {
    constructor(username, wheel, color, pass) {
        super(wheel, color, pass);
        this.username = username;
    }
}
let obj1 = new car(4, "yellow", 11);
let obj2 = new owner("Utpal", 4, "Yellow", 10);
console.log(obj1);
console.log(obj2);
export let number = [1, 2, 3, 4, 5];
let string = ["utpal", "bhowmkik"];
let arr = [...number, ...string];
console.log(arr);

let something = (...numarr) => {
    console.log(numarr);
}
something(1, 2, 3, 4);

let squares = number.map((item => item * item));
console.log(squares);
