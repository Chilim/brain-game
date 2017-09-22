import startGame from '..';
import getRandNum from '../utils';

const task = 'Balance the given number.`';

const getBalancedArray = (number) => {
  const numberToArray = number.toString().split('');
  const digitized = numberToArray.map(elem => Number(elem));

  const iter = (arr) => {
    const sorted = arr.sort((a, b) => a - b);
    const firstDig = sorted[0];
    const lastDig = sorted[sorted.length - 1];
    const others = sorted.slice(1, sorted.length - 1);
    if (lastDig - firstDig <= 1) {
      return sorted;
    }
    return iter([firstDig + 1, lastDig - 1, ...others]);
  };
  return iter(digitized);
};

const getBalancedNum = (number) => {
  const newArr = getBalancedArray(number);
  let newNumber = newArr.map(element => String(element));
  newNumber = Number(newNumber.join(''));
  return newNumber;
};

const getGameContent = () => {
  const question = getRandNum(101, 9999);
  const correctAnswer = getBalancedNum(question);
  return { question, correctAnswer };
};

export default () => startGame(task, getGameContent);
