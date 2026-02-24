const oops = "OOPs Practice";
console.log(`This is File for ${oops}`);

const Person = function(firstname,birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
    this.not_surname = firstname
    console.log(this);
    console.log(`${this.firstname} born in ${birthyear}`);
    //Never Do this Not Good Practice....
    this.calcAge = function(birthyear) {
        const age = 2025 - birthyear
        console.log(age);
    }
}


const vedant = new Person('Vedant Kulkarni',2004);

console.log(vedant instanceof Person);
console.log(Person.prototype)
vedant.calcAge(90)
const jonita = new Person("Jonita",1990);
jonita.calcAge(34);
Person.prototype.calNameLength = function() {
    console.log(`Your name length is ${this.firstname.length}`)
}
vedant.calNameLength(this)
jonita.calNameLength(this)
Person.prototype.City = "Pune";
console.log(vedant.City)
console.log(jonita.__proto__)
console.log(jonita.__proto__.__proto__)
console.log(jonita.__proto__ === Person.__proto__)
console.log(jonita.hasOwnProperty('firstname'));
console.log(jonita.hasOwnProperty('City'));
console.dir(Person.prototype.constructor);
const arrs = [1,2,3,4,5,6,6,7,2,3,1];
console.log(arrs)
//Personal Methods creating using prototypes methods ....adding into Array Prototypes for accessible to all the arrays.
Array.prototype.superUnique = function() {
    return [...new Set(this)];
}

console.log(arrs.superUnique());
//challenge  #1
const car = function(make,speed) {
    this.make = make;
    this.speed = speed;
}
car.prototype.acceleration = function() {
    this.speed += 10;
    console.log(`${this.make} is accelerated , now on ${this.speed} kmph`);
}
car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is braked , now on ${this.speed} kmph`)
}

const BMW = new car('BMW',120);
const Mercedes = new car('Mercedes',90);

BMW.acceleration();
Mercedes.acceleration();
BMW.acceleration();
Mercedes.acceleration();
BMW.brake()
BMW.brake()
BMW.brake()
//Getter Setter for Objects
const accounts = {
    name : 'Jonita',
    movements: [100,200,300,400,500,600],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(accounts.latest);
accounts.latest = 900;
console.log(accounts.movements)

// Classes Implemetations
class PersonCl {
    constructor(first,last,birthYear) {
        this.first = first;
        this.last = last;
        this.birthYear = birthYear;
    }
    FullNameUser() {
        console.log(`Hello, Mr.${this.first} ${this.last},Now you are ${2025 - this.birthYear} year old.`);
        let StringVar = PersonCl.FullStatement()
        console.log(StringVar)
    }
    get Age() {
        return 2025 - this.birthYear;
    }
    static FullStatement() {
        return `Hi,${this.first} is at age ${2025 - this.birthYear}.`;
    }
}

const jonitas = new PersonCl('jonita','gandhi',2004);
jonitas.FullNameUser();
console.log(jonitas.__proto__ === PersonCl.__proto__)
PersonCl.prototype.greet = function() {
    console.log(`Hello ${this.first},let's go on date!!`);
}
jonitas.greet();
console.log(jonitas.Age);
const NewProto = {
    calcAge() {
        return 2025 - this.yearBirth;    
    }
}
const steven = Object.create(NewProto);
console.log(steven)
steven.name = 'Super Steven';
steven.yearBirth = 2009;
console.log(steven.calcAge())
console.log(steven.__proto__)

//Challenge #2
class speedCar {
    constructor(make,speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS() {
        return `${Math.floor(this.speed / 1.6).toFixed(1)} mph`;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}
const Ford = new speedCar('Ford',120);
console.log(Ford.speedUS);
Ford.speedUS = 90;
console.log(Ford.speedUS);
//Inheritance Implementation in JS
