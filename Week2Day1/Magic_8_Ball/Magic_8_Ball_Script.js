function generate_random(max_number){
    return Math.round(Math.random()*max_number);
}
let button = document.querySelector("button");
let answer = document.querySelector("#answer");
button.addEventListener("click", function(){
    let randomNumber = generate_random(5);
    let answerText = "";
    if (randomNumber == 0) {
        answerText = "If you're good at something, never do it for free.";
    }
    else if (randomNumber == 1) {
        answerText = "Do, or do not. There is no try.";
    }
    else if (randomNumber == 2) {
        answerText = "It's what you do right now that makes a difference.";
    }
    else if (randomNumber == 3) {
        answerText = "Until you start believing in yourself, you ain't going have a life!";
    }
    else if (randomNumber == 4) {
        answerText = "Life does not stop and start at your convenience.";
    }
    else if (randomNumber == 5) {
        answerText = "You know what the trouble about real life is? There's no danger music.";
    }
    answer.innerHTML = answerText;
});