import startGame from '..';
import getRandNum from '../utils';

const task = 'What is the result of the expression?`';

const operators = [
  { sign: '+', method(a, b) { return a + b; } },
  { sign: '-', method(a, b) { return a - b; } },
  { sign: '*', method(a, b) { return a * b; } },
];

const getGameContent = () => {
  const selectedOperator = Math.floor(Math.random() * operators.length);
  const number1 = getRandNum(1, 100);
  const number2 = getRandNum(1, 100);
  const operator = operators[selectedOperator].sign;
  const question = `${number1} ${operator} ${number2}`;
  const correct = operators[selectedOperator].method(number1, number2);
  const correctAnswer = `${correct}`;
  return { question, correctAnswer };
};

export default () => startGame(task, getGameContent);
