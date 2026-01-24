console.log("Hello World!! It is Counter!!");
alert("Enjoy the Simple Counter APP!!");
console.log(`Simple Yet
    Super Fucking Powerful into the 
    Margin of Store!!`)
// let input = Number(prompt("Enter the Number for Conversion ? "));
// if(input === '23') {
//     console.log(`${input} is fab number dude !!`);
// }
let counter = document.querySelector('#counters');
let incre = document.querySelector('#incre');
let decre = document.querySelector('#decre');
let reset = document.querySelector('#reset');
let count = 0;

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
