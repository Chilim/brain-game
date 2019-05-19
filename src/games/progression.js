import startGame from '..';
import getRandNum from '../utils';

const sequenceLength = 7;

const buildSequence = (comDiff) => {
  const firstNumber = getRandNum(1, 5);
  const iter = (arr, gap, currentNumber) => {
    if (gap === 0) {
      return arr;
    }
    const nextNumber = currentNumber * comDiff;
    const newArr = arr.concat(nextNumber);
    return iter(newArr, gap - 1, nextNumber);
  };
  return iter([], sequenceLength, firstNumber);
};

const task = 'What number is missing in this progression?';

const getGameContent = () => {
  const commonDifference = getRandNum(2, 5);
  const sequence = buildSequence(commonDifference);
  const gapIndex = getRandNum(1, sequence.length - 1);
  const correctAnswer = `${sequence[gapIndex]}`;
  sequence[gapIndex] = '..';
  const question = sequence.join(' ');
  return { question, correctAnswer };
};

export default userName => startGame(task, getGameContent(), userName);
