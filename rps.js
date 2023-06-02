// rock/paper/scissors - project 

// 1. Based on a UI design Dom Manipulation will be arrange in a backend which is script. For that need to select what are all the element where needed for dom manipulation.

// 2. Focus on what are all the action need to held based on that needs to plan our code and add heres the functions based on,

// getting users input

// generating computer random values

// Adding and displaying score

// displaying Choices of user and computer

// showing-result by comparing

// changing className for result this parts we need to focus on this project.

const userPointEl = document.getElementById('user-points');
const compPointEl = document.getElementById('comp-points');
const userChoiceEl = document.getElementById('user-choice');
const compChoiceEl = document.getElementById('comp-choice');
const resultsEl = document.getElementById('results')
const gameResultEl = document.querySelector('.game-result')

// global Variable
let result = '';
let UserScore = 0;
let CompScore = 0;

function getComputerChoice() {
    const weapons = ['rock', 'paper', 'scissors'];
    //note: Math function is used for many purposes but here used for generating values randomly using random and rounding off(not considering all the decimal points alone) using trunc.
    const randomNumber = Math.trunc(Math.random() * weapons.length);

    // inside the function always must be return something then this will work properly 
    return weapons[randomNumber];
}

function playGame(userChoice) {
    // note: function invoking inside a block or outside a block should be under a const or let variable.
    const computerChoice = getComputerChoice();

    // both user and computer matches result is draw
    if (userChoice === computerChoice) {
        result = "DRAW"
    } else if (
        // winning possibles for user 
        userChoice === 'rock' && computerChoice === "scissors" ||
        userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'scissors' && computerChoice === 'paper'
    ) {
        result = "WON"
    } else {
        result = "LOST"
    }

    // DOM manipulation work done here,

    // info-part
    userChoiceEl.innerHTML = userChoice;
    compChoiceEl.innerHTML = computerChoice;
    // result-part
    gameResultEl.style.display = "block"
    resultsEl.innerHTML = `User : ${result}`

    if (result === 'WON') {
        gameResultEl.className = "game-result won"
        UserScore = UserScore + 1;
        userPointEl.innerText = UserScore;
    } else if (result === 'LOST') {
        gameResultEl.className = "game-result lost"
        CompScore = CompScore + 1;
        compPointEl.innerText = CompScore;
    } else {
        gameResultEl.className = "game-result draw"
    }

    console.log(`User Choice:${userChoice}`)
    console.log(`Computer Choice:${computerChoice}`)
    console.log(`Result:${result}`)
}
