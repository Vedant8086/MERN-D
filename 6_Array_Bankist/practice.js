const Project = "Bankist Application";
console.log(`This is Practice File for ${Project}.`)
console.log(23 === 23.0)
console.log(0.1 + 0.2 === 0.3)
console.log(Number('23'))
console.log(typeof +'23')
console.log(+'23');
console.log(Number.parseInt('30Px50'))
console.log(Number.parseInt('w32'))
console.log(Number.isNaN(20))
console.log(Number.isNaN(23 / 0))
console.log(Number.isFinite(23 / 1))
console.log(Number.isFinite(+'20X'));
console.log(Number.isInteger(20))
console.log(Math.max(12,2,3,4,5))
console.log(Math.min(12,2,3,4,5))
console.log(Math.max(12,34,45,'78'))
console.log(Math.PI * Number.parseFloat('10x') ** 2);
console.log(Math.trunc(Math.floor(Math.random() * 6) + 2))

const randomInt = (min,max) => 
    Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomInt(10,20))

console.log(typeof Math.trunc(-23.3))

console.log((2.345).toFixed(1))

const separator_number = 23_000
console.log(`This is Number Seaparator : ${separator_number}`)

console.log(Number.POSITIVE_INFINITY)
console.log(Number.MAX_VALUE)
console.log(Number.NEGATIVE_INFINITY)
console.log(BigInt(1378465745874685763485))
console.log(1378465745874685763485463456456n + 87346587346n)

const new_date = new Date()
console.log(new_date)
const prev_date = new Date('December 24,2015')
console.log(prev_date)
const future = new Date(2037, 9, 4, 5, 10,10, 10)
console.log(`\n
    The Year  : ${future.getFullYear()}\n
    The Month : ${Number(future.getMonth())}\n
    The Date : ${future.getDate()}\n
    The Day : ${future.getDay()}\n
    The Hours : ${future.getHours()}\n
    The Minutes : ${future.getMinutes()}\n
    The Seconds : ${future.getSeconds()}\n
    The MilliSeconds : ${future.getMilliseconds()}
    ${future.getTimezoneOffset()}`)

    
console.log(future.getFullYear)
console.log(future.getDay)
console.log(future.getHours)
console.log(future.getMinutes)
console.log(future.getMilliseconds)
console.log(future.getSeconds)
console.log(future.getDate)
