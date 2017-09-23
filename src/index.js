import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const getResult = (userName, getGameContent) => {
  const iter = (gameCount) => {
    if (gameCount === numberOfRounds) {
      console.log(`Congratulations, ${userName}!`);
      return 'End Game';
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
    console.log(`Let's try again, ${userName}!`);
    return 'The end';
  };
  return iter(0);
};

export default (condition, getGameContent) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${condition}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return getResult(userName, getGameContent);
};
