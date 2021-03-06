import startGame from '..';
import getRandNum from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const getGameContent = () => {
  const number1 = getRandNum(1, 100);
  const number2 = getRandNum(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${gcd(number1, number2)}`;
  return { question, correctAnswer };
};

export default userName => startGame(task, getGameContent(), userName);
