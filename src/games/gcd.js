import startGame from '..';
import getRandNum from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const getGameContent = () => {
  const number1 = getRandNum(1, 100);
  const number2 = getRandNum(1, 100);
  const question = `${number1} ${number2}`;
  const correct = gcd(number1, number2);
  const correctAnswer = `${correct}`;
  return { question, correctAnswer };
};

export default () => startGame(task, getGameContent);
