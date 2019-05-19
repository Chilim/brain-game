import startGame from '..';
import getRandNum from '../utils';

const task = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (number) => {
  const iter = (divider) => {
    if (Math.sqrt(number) < divider) {
      return true;
    } else if (number % divider === 0) {
      return false;
    }
    return iter(divider + 1);
  };
  return iter(2);
};

const getGameContent = () => {
  const question = getRandNum(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default userName => startGame(task, getGameContent(), userName);
