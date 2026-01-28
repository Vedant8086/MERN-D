let something = `this is nw some thing text`;
function a(something) {
    let the = `this is ${something} is message`;
    let a = 90001;
    second();
    function second() {
        let a_var = "this is var";
        console.log(this.a)
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

let a = 90,b = 80;
// want to tamaper values then....
({a,b} = arrs);
console.log(`Values a  : ${a} and of b : ${b}`);