let userscore= 0;
let computerscore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToword(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "paper";
    return "scissors";
}

function win(userChoice,computerChoice)
 {  
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userscore++;
    userScore_span.innerHTML = userscore;
    computerScore_span.innerHTML = computerscore;
    result_p.innerHTML = `${convertToword(userChoice)}${smallUserWord} beats ${convertToword(computerChoice)}${smallCompWord}. you win! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow') , 300);
}

function lose(userChoice,computerChoice)
 {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerscore++;
    userScore_span.innerHTML = userscore;
    computerScore_span.innerHTML = computerscore;
    result_p.innerHTML = `${convertToword(userChoice)}${smallUserWord} loses to ${convertToword(computerChoice)}${smallCompWord}. you lost...👎`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() =>  userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice,computerChoice)
 {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToword(userChoice)}${smallUserWord} equals to ${convertToword(computerChoice)}${smallCompWord}. It's a draw`; 
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow') , 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
    break;

   case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice);
        break;

        case "rr":
            case "pp":
            case "ss":
                draw(userChoice, computerChoice);
                break;
}
}


function main()
{
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click',() => game ("p"));
    scissors_div.addEventListener('click',() => game("s"));
} 
main();