import startGame from '..';
import getRandNum from '../utils';

const task = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (randNum) => {
  const iter = (divider) => {
    if (Math.sqrt(randNum) < divider) {
      return true;
    } else if (randNum % divider === 0) {
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

export default () => startGame(task, getGameContent);
