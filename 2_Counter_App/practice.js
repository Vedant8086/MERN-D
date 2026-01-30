'use strict'
let something = `this is nw some thing text`;
function a(something) {
    let the = `this is ${something} is message`;
    let a = 90001;
    second();
    function second() {
        let a_var = "this is var";
        console.log(this?.a)
    }

}

a(something);
var obj = "Matilda";
const fool = {
    obj : "name",
    "name" : 90,
    greet : function () {
        console.log(`something in obj ${this.obj} has age ${this.name}.`);
    }
}

fool.greet()

const addExpr = function(a,b) {
    console.log(`Inside Arguments ${arguments[0]} and ${arguments[1]}`);
    return a + b;
} 
console.log(addExpr(2,4))

const multiExpr = function(a,b,c,d) {
    console.log(`Arguments inside the function are ${arguments}`)
    console.log(`this is arguments ${arguments[0]} and ${arguments[1]} and ${arguments[2]}`)
    return a * b * c * d;
}
console.log(multiExpr(1,2,3,4))


const Object = {
    menu :['Garlic Bread','roti','Paneer','Masala Papad'],
    starter : ['Soup','Salad','gobi','Papad'],
    rice : ['jira rice','plain','anna rice','rasam rice'],
    order : function(start,main) {
        return [this.starter[start],this.rice[main]];
    }
}

let [rice_1, rice_2] = Object.rice;
console.log(`Rice one is ${rice_1} and rice 2 is ${rice_2}.`)

let [menu_1,,menu_3] = Object.menu;
console.log(`Menu one is ${menu_1} and menu 3 is ${menu_3}.`);


//Simple Swappin Mechanism

[rice_1, rice_2] = [rice_2, rice_1];
console.log(`After Swapping var : ${rice_1} and ${rice_2}`)

const [start,menus] = Object.order(1,2);
console.log(`This is your ${start} and main is your ${menus}`);

//Nested Destructuring....
let arrs = [1,2,3,4,[5,6,7]];
const [i,,,,[o,p,u]] = arrs;
console.log(`Elements in Array are : ${i} and ${o} and ${u} and ${p}`)
const charts = {
    menu :['Garlic Bread','roti','Paneer','Masala Papad'],
    starter : ['Soup','Salad','gobi','Papad'],
    rice : ['jira rice','plain','anna rice','rasam rice'],
    order : function(start,main) {
        return [this.starter[start],this.rice[main]];
    },
    opennigHours : {
        thu : {
            open : 12,
            close : 12
        },
        fri : {
            open : 12,
            close : 12
        },
        sat : {
            open : 1,
            close : 10
        },
        sun : {
            open : 0,
            close : 0
        }
    }
}
const {menu,starter,rice} = charts;
console.log(menu,starter,rice)


// console.log(`Values a  : ${a} and of b : ${b}`);

const badArr = [1,2,3,...arrs];
console.log(`Bad Array is `,badArr)
const anotherMenu = ['Loolipop',...charts.menu];
console.log(anotherMenu)

const supremes = [1,2,3,4,5,6,7];
const [os,ps,...others] = supremes
console.log(os,ps,others)
console.log(typeof others)

//destructuring and REST Operation

const another_array = charts.menu;

for(const items of another_array) {
    console.log(items)
}
//Best way to traverse the Object.
for(const key in charts) {
    console.log(key," : ",charts[key]);
}

const new_map = new Map([
    ['Menu', ['Garlic Bread','roti','Paneer','Masala Papad']],
    ['Starter', ['Soup','Salad','gobi','Papad']],
    ['Rice', ['jira rice','plain','anna rice','rasam rice']]
])

console.log(new_map)

for(const [key,value] of new_map) {
    console.log(key," : ",value)
}

console.log("Map has Menu ?  : ",new_map.has('Menu'));

const tes_obj = {
    name : "Mike",
    Wife : "Eleven",
    Partner : "Will"
}

console.log("Before : ",tes_obj)
const tes_function = function(new_names,tes_obj) {
    tes_obj.name = new_names;
}
tes_function("Fool",tes_obj);
console.log('After : ',tes_obj)

const upperFirstWord = function(str) {
    const [first,...othe] = str.split(' ');
    return [first.toUpperCase(),...othe].join(' ');
}

const transformer = function(str,fn) {
    console.log(`This is Original String : ${str}`);
    console.log(`This is Transformed String : ${fn(str)}`);
    console.log(`This String is Transformed By Function : ${fn.name}`)
}

transformer("Javascript is Better.",upperFirstWord);

//designing a closure
const greets = function(greeting) {
        return function(name) {
        console.log(`${greeting} to ${name}.`);
    }
}

greets("hello")("vedant")
const closures = greets("Hello")
closures("Vedant");

const another_greets = (prons) => {
    return (names) => {
        console.log(`${prons} to ${names}.`);
    }
}
const one_another_greeting = greetss => namesss =>console.log(`${greetss} to ${namesss}.`)
one_another_greeting("Hello")("Vedant");
//IIFE
(
    function() {
        console.log(`this is never run again!!!`);
    }
)();
//another way
(() => console.log(`this is also never run again!!!`))();