// This is a rock, scissor, paper simple game please input your choice in line 50!! When using 'bomb' you will automaticly won.
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error! Please input the correct word (rock, paper, scissor, bomb)');
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
};
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return `It's a tie!`;
    } else {
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return `The computer won!`;
            } else {
                return `You won!`;
            }
        } else if (userChoice === 'paper') {
            if (computerChoice === 'scissor') {
                return `The computer won!`;
            } else {
                return `You won!`;
            }
        } else if (userChoice === 'scissor') {
            if (computerChoice === 'rock') {
                return `The computer won!`;
            } else {
                return `You won!`;
            }
        } else if (userChoice === 'bomb') {
            return `You using cheat code, You won!`
        }
    }
}
const playGame = () => {
    const userChoice = getUserChoice('abomb'); // Input your choice here! (rock, paper, scissor, bomb)
    const computerChoice = getComputerChoice();
    console.log(`You threw ${userChoice}`);
    console.log(`The computer threw ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();