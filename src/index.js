import readlineSync from 'readline-sync';

const gameCount = 3;
const getResult = (userName, getGameContent) => {
  const iter = (count) => {
    if (count === 0) {
      console.log(`'Congratulations', ${userName}!`);
      return 'End Game';
    }
    const gameContent = getGameContent();
    const userAnswer = readlineSync.question(`Question: ${gameContent.question} `);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === gameContent.correctAnswer) {
      console.log('Correct!');
      return iter(count - 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameContent.correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    return 'The end';
  };
  return iter(gameCount);
};

export default (condition, getGameContent) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${condition}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return getResult(userName, getGameContent);
};
