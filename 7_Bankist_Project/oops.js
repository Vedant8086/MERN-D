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
Person.prototype.calNameLength = function(name) {
    console.log(`Your name length is ${this.firstname.length}`)
}
vedant.calNameLength(this)
jonita.calNameLength(this)
Person.prototype.City = "Pune";
console.log(vedant.City)
console.log(jonita.__proto__)
console.log(jonita.__proto__ === Person.__proto__)
console.log(jonita.hasOwnProperty('firstname'));
console.log(jonita.hasOwnProperty('City'));