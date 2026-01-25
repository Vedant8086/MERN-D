console.log("Hello World!! It is Counter!!");
// alert("Enjoy the Simple Counter APP!!");
console.log(`Simple Yet
    Super Fucking Powerful into the 
    Margin of Store!!`)
// let input = Number(prompt("Enter the Number for Conversion ? "));
// if(input === '23') {
    //     console.log(`${input} is fab number dude !!`);
    // }
const years = new Array(89,90,89,23);
const age = [years[0],years[1],years[years.length - 1]]
console.log(age);
console.log(years.pop(),years)
const tool = birthmake => 23098 - birthmake;
console.log(tool(90));
const jonasArray = [
    'Jonas',
    'Schemandams',
    56879-90,
    ['donald','trump','putin'],

];
console.log(typeof jonasArray)
let obj1 = {
    name : 'Vedant',
    age : 90,
    comapny : 'infrabyte'
};
let obj2 = {
    name : 'Vedant',
    age : 90,
    company : ['mike','loop','fool'],
    employee_id : {
        id1 : 90,
        id2 : 91,
        id3 : 92
    },
    calAge : function(age) {
        return 2025 - age;
    }
}
obj2['LiteVersion'] = 'Chennai';
console.log(`My name is ${obj1.name} and age is ${obj1.age} and i work at ${obj1.comapny}.`);
console.log(`My Object is ${obj2.employee_id.id2} and ${obj2['employee_id']['id2']}`);
console.log(`New Added Ver is ${obj2.LiteVersion} and ${obj2.calAge(45)}`)
let counter = document.querySelector('#counters');
let incre = document.querySelector('#incre');
let decre = document.querySelector('#decre');
let reset = document.querySelector('#reset');
let count = 0;
let theme_change = document.querySelector('#theme_change');

incre.addEventListener('click',() => {
    count++;
    counter.innerHTML = count;
})

decre.addEventListener('click',() => {
    if(count === 0) {
        alert("Can't go Negative!!!")
    } else {
        count--;
        counter.innerHTML = count;
    }
})

reset.addEventListener('click',() => {
    count = 0;
    counter.innerHTML = count;
})

const themeBtn = document.getElementById("theme_change");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.classList.add("dark");
} else {
  root.classList.remove("dark");
}

themeBtn.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
