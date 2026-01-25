console.log("Game Development Started!!!");
let btn = document.querySelector('.check');
let again = document.querySelector('.again');
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;
if(document.querySelector('.guess').value ===  ' ') {
    document.querySelector('.message').textContent = "Start Guessing...";
}
btn.addEventListener('click',function() {
    const guessed_number = Number(document.querySelector('.guess').value);
    console.log(guessed_number);
    console.log(typeof guessed_number)
    if(!guessed_number) {
        document.querySelector('.message').textContent = "🦞🦞 Not A Number 🦞🦞"
    } else  if(guessed_number === number){
        document.querySelector('.message').textContent = "Correct Number ✅";
        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = number;
        if(score > high_score) {
            high_score = score;
            document.querySelector('.highscore').textContent = high_score;
        }
    } else if(guessed_number > number) {
        if(score > 0) { 
            document.querySelector('.message').textContent = "Too High Number ⬆️⬆️";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lose The Game 💥";
        }
    } else if(guessed_number < number) {
        if(score > 0) { 
            document.querySelector('.message').textContent = "Too Low Number ⬇️⬇️";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lose The Game 💥";
        }
    }
})

again.addEventListener('click',function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start Guessing...";
    document.body.style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent = 0;
    number = Math.trunc(Math.random() * 20) + 1;
})
