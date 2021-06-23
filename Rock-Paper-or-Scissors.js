const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if ( userInput === 'rock' || userInput === 'paper' ||userInput === 'scissors' || userInput === 'bomb'){
  return userInput ;
} else {
  console.log ('Error!');
}
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
   case 0:
   return 'rock';
   case 1:
   return 'paper';
   case 2:
   return 'scissors';
 }
};

const determineWinner = (userChoice, computerChoice) => {
 if (userChoice === computerChoice) {
  return 'Egalitate';
  }
  if (userChoice === 'rock') {
   if (computerChoice === 'paper') {
      return 'Computerul a câștigat!';
  } else {
     return 'Ai castigat!';
  }
}

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computerul a câștigat!';
  } else {
    return 'Ai castigat!';
  }
}

if (userChoice === 'scrissors') {
  if (computerChoice === 'rock') {
    return 'Computerul a câștigat!';
  } else {
    return 'Ai castigat!';
    }
  }
  if (userChoice === 'bomb') {
    return 'Felicitari, ati castigat!';
  }
};



const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('Ai aruncat: ' + userChoice);
  console.log('Calculatorul a aruncat: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame()


