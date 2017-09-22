import startGame from '..';
import getRandNum from '../random-number';

const task = 'Balance the given number.`';

const getBalanceArray = (numbers) => {
  const newNumber = numbers.toString().split('');
  const digitized = newNumber.map(elem => Number(elem));

  const iter = (acc) => {
    const sorted = acc.sort((a, b) => a - b);
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

const getBalanceNum = (numbers) => {
  const newArr = getBalanceArray(numbers);
  let newNumber = newArr.map(element => String(element));
  newNumber = Number(newNumber.join(''));
  return newNumber;
};

const getGameContent = () => {
  const question = getRandNum(101, 9999);
  const correctAnswer = getBalanceNum(question);
  return { question, correctAnswer };
};

export default () => startGame(task, getGameContent);
