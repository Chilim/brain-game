import readlineSync from 'readline-sync';

const greetings = 'Welcome to the Brain Games!';
const succeed = 'Congratulations';
const iterNum = 0;

const getResult = (userName, getGameContent) => {
  const iter = (acc) => {
    if (acc === 3) {
      console.log(`${succeed}, ${userName}!`);
      return 'End Game';
    }
    const gameContent = getGameContent();
    const userAnswer = readlineSync.question(`Enter result: ${gameContent.question} `);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === gameContent.correctAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    console.log(`${userAnswer} is wrong answer. Correct answer was ${gameContent.correctAnswer}`);
    return iter(acc);
  };
  return iter(iterNum);
};

export default (condition, getGameContent) => {
  console.log(`${greetings}\n ${condition}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return getResult(userName, getGameContent);
};
