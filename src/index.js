import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const getResult = (question, correctAnswer, userName) => {
  const helper = (gameCount, userAnswer = 0) => {
    if (gameCount === numberOfRounds) {
      return userAnswer;
    }
    console.log(`Question: ${question} `);
    const newUserAnswer = readlineSync.question('Your answer: ');
    if (newUserAnswer === correctAnswer) {
      console.log('Correct!');
      return newUserAnswer;
    }
    console.log(`Let's try again, ${userName}!`);
    return helper(gameCount + 1, newUserAnswer);
  };
  return helper(0);
};

export default (task, gameContent, userName) => {
  console.log(`${task}`);
  const { question, correctAnswer } = gameContent;
  const userAnswer = getResult(question, correctAnswer, userName);
  if (userAnswer === correctAnswer) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
};
