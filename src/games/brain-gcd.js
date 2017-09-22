import startGame from '..';
import getRandNum from '../random-number';

const task = 'Find the greatest common divisor of given numbers.';

const getGameContent = () => {
  const number1 = getRandNum(1, 100);
  const number2 = getRandNum(1, 100);
  const question = `${number1} ${number2}`;
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  const correct = gcd(number1, number2);
  const correctAnswer = `${correct}`;
  return { question, correctAnswer };
};

export default () => startGame(task, getGameContent);
