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