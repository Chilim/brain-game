import startGame from '..';
import getRandNum from '../utils';

const task = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (a) => {
  const iter = (number) => {
    if (Math.sqrt(a) < number) {
      return true;
    } else if (a % number === 0) {
      return false;
    }
    return iter(number + 1);
  };
  return iter(2);
};

const getGameContent = () => {
  const question = getRandNum(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame(task, getGameContent);
