import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const getResult = (userName, getGameContent) => {
  const iter = (gameCount) => {
    if (gameCount === numberOfRounds) {
      return true;
    }
    const gameContent = getGameContent();
    console.log(`Question: ${gameContent.question} `);
    const userAnswer = readlineSync.question('Your answer: ');
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === gameContent.correctAnswer) {
      console.log('Correct!');
      return iter(gameCount + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameContent.correctAnswer}'`);
    return false;
  };
  return iter(0);
};

export default (condition, getGameContent) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${condition}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const isWinner = getResult(userName, getGameContent);
  if (isWinner) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
